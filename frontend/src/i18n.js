import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
var resources = {
    en: {
        translation: {
            "taskManager": "Task Manager",
            "addTask": "Add Task",
            "loading": "Loading...",
            "edit": "Edit",
            "delete": "Delete",
            "close": "Close",
            "cancel": "Cancel",
            "update": "Update",
            "title": "Title",
            "description": "Description",
            "status": "Status",
            "completed": "Completed",
            "pending": "Pending",
            "markAsCompleted": "Mark as Completed",
            "markAsPending": "Mark as Pending",
            "titleRequired": "Title is required",
            "descriptionRequired": "Description is required",
            "success": "Success",
            "error": "Error",
            "taskAdded": "Task added successfully",
            "taskUpdated": "Task updated successfully",
            "taskDeleted": "Task deleted successfully",
            "failedToFetchTasks": "Failed to fetch tasks",
            "failedToAddTask": "Failed to add task",
            "failedToUpdateTask": "Failed to update task",
            "failedToDeleteTask": "Failed to delete task",
            "fillAllFields": "Please fill all required fields",
            "tip": "Tip: Click on a task to view its content",
            "darkMode": "Dark Mode",
            "lightMode": "Light Mode",
            "language": "Language",
            "profile": "Profile",
            "name": "Name",
            "email": "Email"
        }
    },
    es: {
        translation: {
            "taskManager": "Gestor de Tareas",
            "addTask": "Agregar Tarea",
            "loading": "Cargando...",
            "edit": "Editar",
            "delete": "Eliminar",
            "close": "Cerrar",
            "cancel": "Cancelar",
            "update": "Actualizar",
            "title": "Título",
            "description": "Descripción",
            "status": "Estado",
            "completed": "Completada",
            "pending": "Pendiente",
            "markAsCompleted": "Marcar como Completada",
            "markAsPending": "Marcar como Pendiente",
            "titleRequired": "El título es obligatorio",
            "descriptionRequired": "La descripción es obligatoria",
            "success": "Éxito",
            "error": "Error",
            "taskAdded": "Tarea agregada exitosamente",
            "taskUpdated": "Tarea actualizada exitosamente",
            "taskDeleted": "Tarea eliminada exitosamente",
            "failedToFetchTasks": "Error al obtener las tareas",
            "failedToAddTask": "Error al agregar la tarea",
            "failedToUpdateTask": "Error al actualizar la tarea",
            "failedToDeleteTask": "Error al eliminar la tarea",
            "fillAllFields": "Por favor, complete todos los campos requeridos",
            "tip": "Consejo: Haz clic en una tarea para ver su contenido",
            "darkMode": "Modo Oscuro",
            "lightMode": "Modo Claro",
            "language": "Idioma",
            "profile": "Perfil",
            "name": "Nombre",
            "email": "Correo electrónico"
        }
    }
};
i18n
    .use(initReactI18next)
    .init({
    resources: resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});
export default i18n;
