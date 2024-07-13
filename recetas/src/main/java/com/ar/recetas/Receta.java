package com.ar.recetas;

public class Receta {
    // Atributos de la clase Receta que representan las columnas de la tabla
    private int idReceta;  
    private String titulo; 
    private String detalle;   
    private String dificultad;
    private String imagen;   


    public Receta() {}

    // Constructor con parámetros para inicializar todos los atributos
    public Receta(int idReceta,String titulo, String detalle, String dificultad, String imagen) {
        this.idReceta = idReceta;
        this.titulo = titulo;
        this.detalle = detalle;
        this.dificultad = dificultad;
        this.imagen = imagen;
    }

    // Método getter para obtener el ID 
    public int getIdReceta() {
        return idReceta;
    }

    // Método setter para establecer el ID 
    public void setIdReceta(int idReceta) {
        this.idReceta = idReceta;
    }

    // Método getter para obtener el título
    public String getTitulo() {
        return titulo;
    }

    // Método setter para establecer el título 
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    // Método getter para obtener el detalle
    public String getDetalle() {
        return detalle;
    }

    // Método setter para establecer el detalle
    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    // Método getter para obtener la dificultad
    public String getDificultad() {
        return dificultad;
    }

    // Método setter para establecer la dificultad
    public void setDificultad(String dificultad) {
        this.dificultad = dificultad;
    }

    // Método getter para obtener la imagen 
    public String getImagen() {
        return imagen;
    }

    // Método setter para establecer la imagen 
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


}