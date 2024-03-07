# Instruccion de onfiguración/ejecución

1. Clonar repositorio
2. Acceder a la carpeta
3. Instalar dependencias con `npm install`
4. Hacer `npm start` para iniciar el proyecto

## ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Comencé evaluando los requisitos y restricciones del proyecto, primero decidí ver la documentación del framework DevExtreme para instalar el framework y familiarizarme con las opciones disponibles. Luego analicé el diseño y contenido propuesto para determinar las mejores opciones que cumplieran con los requisitos funcionales y no funcionales.

Antes de empezar a desarrollar, probé algunos ejemplos de componentes y funcionalidades de DevExtreme. Pensaba que al instalar el proyecto habría una opción de plantilla vacía para comenzar, pero la única opción era usar la plantilla por defecto que incluía un inicio de sesión y algunas funcionalidades extra. También me llevó algo de tiempo eliminar algunas partes que no eran necesarias según lo requerido en el documento

Decidí separar en componentes las partes principales, como el encabezado, el pie de página y el contenido principal. Después de esto, estuve desarrollando las funciones que no necesitaban manejo de estado. Una vez terminada esa parte, instalé Recoil como manejador de estados. Luego, estuve leyendo la documentación y vi algunos videos antes de comenzar a desarrollar la parte más dinámica.

### ¿Hay alguna mejora que pueda hacer en su envío?

Una mejora potencial en nuestro envío podría centrarse en la optimización del rendimiento. Podriamos utiliza alguna herramienta de compresión de imágenes para reducir el tamaño de los archivos de imagen sin sacrificar demasiada calidad o implementar lazy loading para cargar imágenes solo cuando el usuario las necesita.

### ¿Qué haría de manera diferente si se le asignara más tiempo?

Dedicaría más tiempo para desarrollar pruebas unitarias y E2E con el fin de identificar y solucionar cualquier problema potencial antes de la implementación. También dedicaría más tiempo para refinar el diseño de la interfaz de usuario, asegurándome de que la experiencia en dispositivos móviles sea tan fluida como en escritorio.
