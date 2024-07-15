package com.ar.recetas;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    
    private Connection connection;  

    // Constructor de la clase Conexion
    public Conexion() {
        try {
            // Paso 1: Cargar dinámicamente el driver de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Paso 2: Establecer la conexión con la base de datos en localhost
            this.connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/basedatosreceta",  
                "root",  
                ""
            );
        } catch (ClassNotFoundException e) {
            e.printStackTrace();  
        } catch (SQLException e) {
            e.printStackTrace();  
        }
    }

    // Método para obtener la conexión GETTER
    public Connection getConnection() {
        return connection;  
    }

    // Método para cerrar la conexión
    public void close() {
        try {
            
            if (connection != null && !connection.isClosed()) {
                connection.close();  
            }
        } catch (SQLException e) {
            e.printStackTrace();  
        }
    }
}

