/* =========================================================
   📊 DATOS DE PROYECTOS
   ========================================================= */

export interface ProjectData {
  title: string
  img: string
  description: string
  tools: string[]
}

export const projectsData: Record<string, ProjectData> = {
  project1: {
    title: 'Mi Proyecto 2',
    img: '/fondo9.jpg',
    description:
      'CRUD TalentoTech es una aplicación web desarrollada en PHP que permite gestionar la información de un hotel, incluyendo empleados, clientes y habitaciones. Este proyecto utiliza una base de datos MySQL para almacenar los datos',
    tools: ['PHP', 'MySQL', 'HTML', 'CSS']
  },
  project2: {
    title: 'Mi Proyecto 3',
    img: '/fondo9.jpg',
    description:
      'ContactManagerApp es una aplicación web para la gestión de contactos, donde los usuarios pueden agregar, eliminar y marcar como favoritos a sus contactos. Está desarrollada con React y utiliza Redux Toolkit para el manejo del estado global.',
    tools: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS']
  }
}

// Función helper para obtener todos los proyectos
export const getAllProjects = (): ProjectData[] => {
  return Object.values(projectsData)
}

// Función helper para obtener un proyecto específico
export const getProjectById = (id: string): ProjectData | undefined => {
  return projectsData[id]
}
