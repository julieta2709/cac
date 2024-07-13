package com.ar.recetas;

// Importaciones necesarias para la clase Controlador
import com.fasterxml.jackson.databind.ObjectMapper; 
import javax.servlet.ServletException; 
import javax.servlet.annotation.WebServlet; 
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.*; 
import java.util.ArrayList; 
import java.util.List;

// Clase Controlador
@WebServlet("/recetas") 
public class Controlador extends HttpServlet { 

    // Método POST 
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Configurar cabeceras CORS
        response.setHeader("Access-Control-Allow-Origin", "*"); 
        response.setHeader("Access-Control-Allow-Methods", "*"); 
        response.setHeader("Access-Control-Allow-Headers", "Content-Type"); 
        Conexion conexion = new Conexion();  
        Connection conn = conexion.getConnection();

        try {
            ObjectMapper mapper = new ObjectMapper();  
            Receta receta = mapper.readValue(request.getInputStream(), Receta.class);  
        
            String query = "INSERT INTO `recetas` (`id_receta`, `titulo`, `detalle`, `dificultad`, `imagen`) VALUES(?, ?, ?, ?)";
            PreparedStatement statement = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);  // Indicar que queremos obtener las claves generadas automáticamente
        
            // Establecer los parámetros 
            statement.setString(1, receta.getTitulo());
            statement.setString(2, receta.getDetalle());
            statement.setString(3, receta.getDificultad());
            statement.setString(4, receta.getImagen());
        
            statement.executeUpdate();  
        
            // Obtener las claves generadas automáticamente 
            ResultSet rs = statement.getGeneratedKeys();
            if (rs.next()) {
                Long idReceta = rs.getLong(1);  // Obtener el valor del primer campo generado automáticamente 
                
                
                response.setContentType("application/json");  
                String json = mapper.writeValueAsString(idReceta);  
                response.getWriter().write(json); 
            }
            
            response.setStatus(HttpServletResponse.SC_CREATED);
            } catch (SQLException e) {
                e.printStackTrace();  
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);  
            } catch (IOException e) {
                e.printStackTrace();  
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);  
            } finally {
                conexion.close();  
            }
        
    }

    // Método GET 
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Configurar cabeceras CORS
        response.setHeader("Access-Control-Allow-Origin", "*"); 
        response.setHeader("Access-Control-Allow-Methods", "*"); 
        response.setHeader("Access-Control-Allow-Headers", "Content-Type"); 
        Conexion conexion = new Conexion();  
        Connection conn = conexion.getConnection();

        try {
            // Consulta SQL 
            String query = "SELECT * FROM recetas";
            Statement statement = conn.createStatement();
            ResultSet resultSet = statement.executeQuery(query);  

            List<Receta> recetas = new ArrayList<>();  

            
            while (resultSet.next()) {
    
                Receta receta = new Receta(
                    resultSet.getInt("id_receta"),
                    resultSet.getString("titulo"),  
                    resultSet.getString("detalle"),
                    resultSet.getString("dificultad"),
                    resultSet.getString("imagen")
                );
                recetas.add(receta);  
            }

            ObjectMapper mapper = new ObjectMapper();  
            String json = mapper.writeValueAsString(recetas);  

            response.setContentType("application/json");  
            response.getWriter().write(json);

        } catch (SQLException e) {
            e.printStackTrace();  
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);  
        } finally {
            conexion.close();  
        }
    }




}