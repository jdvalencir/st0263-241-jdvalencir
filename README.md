# info de la materia: ST0263-241 Topicos Especiales En Telemática
#
# Estudiante(s): Julián David Valencia Restrepo
#
# Profesor: Edwin Nelson Montoya Munera, emontoya@eafit.edu.co
#

# Reto 1 y 2 P2P
#
# 1. breve descripción de la actividad
#
Este es un proyecto de sistema Peer-to-Peer (P2P) para la transferencia de archivos. El proyecto está estructurado en múltiples componentes que representan diferentes nodos y un servidor central.
## 1.1. Que aspectos cumplió o desarrolló de la actividad propuesta por el profesor (requerimientos funcionales y no funcionales)
## Requerimientos Funcionales

1. Conectividad Peer-to-Peer: Los peers deben poder conectarse entre sí para compartir archivos.
2. Servidor Central: Debe existir un servidor central que facilite el descubrimiento de peers y archivos.
3. Transferencia de Archivos: Los peers deben ser capaces de subir y descargar archivos de otros peers.

## Requerimientos No Funcionales

1. Escalabilidad: El sistema debe poder manejar un aumento en el número de peers sin degradación significativa del rendimiento.


## 1.2. Que aspectos NO cumplió o desarrolló de la actividad propuesta por el profesor (requerimientos funcionales y no funcionales)

1. No se cumplió con el despliegue en AWS

# 2. información general de diseño de alto nivel, arquitectura, patrones, mejores prácticas utilizadas.

![Screenshot from 2024-03-03 23-25-07](https://github.com/jdvalencir/st0263-241-jdvalencir/assets/88250984/682bde1f-71d6-4c97-aa7e-66edf9923eac)


# 3. Descripción del ambiente de desarrollo y técnico: lenguaje de programación, librerias, paquetes, etc, con sus numeros de versiones.

- Se utilizó fastAPI para el server central y node js para el cliente y el pserver
## Estructura de Directorios

- `Peer`: Contiene los archivos relacionados con la funcionalidad del peer en la red.
  - `files`: Directorio para almacenar archivos que el peer puede compartir.
  - `Pclient`: Contiene el código del cliente P2P.
  - `Pserver`: Contiene el código del servidor P2P.

- `ServerCentral`: Directorio que contiene los archivos relacionados con el servidor central.
  - `dockerfile`: Definición para construir la imagen Docker para el servidor central.
  - `main.py`: Punto de entrada principal para el servidor central.
  - `requirements.txt`: Lista de dependencias necesarias para ejecutar el servidor central.
  - `.gitignore`: Especifica los archivos no rastreados que Git debe ignorar.
  - `readme.md`: Este archivo.
  - 


# referencias:
[dockerHub](https://hub.docker.com/) 
[docker](https://docs.docker.com/)
[GRCP docs](https://grpc.io/docs/languages/node/basics/)
