var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { fetchTasks as fetchTasksApi, addTask as addTaskApi, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/tasksApi';
var useTasks = function () {
    var t = useTranslation().t;
    var _a = useState([]), tasks = _a[0], setTasks = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(false), isAddModalOpen = _c[0], setIsAddModalOpen = _c[1];
    var _d = useState(false), isEditModalOpen = _d[0], setIsEditModalOpen = _d[1];
    var _e = useState(null), selectedTask = _e[0], setSelectedTask = _e[1];
    useEffect(function () {
        var fetchTasks = function () { return __awaiter(void 0, void 0, void 0, function () {
            var tasks_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetchTasksApi()];
                    case 2:
                        tasks_1 = _b.sent();
                        setTasks(tasks_1);
                        return [3 /*break*/, 5];
                    case 3:
                        _a = _b.sent();
                        showAlert('error', t('failedToFetchTasks'));
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchTasks();
    }, [t]);
    var showAlert = function (icon, title) {
        Swal.fire({
            icon: icon,
            title: title,
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: function (toast) {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
            customClass: {
                container: 'swal2-container-custom',
                popup: 'swal2-popup-custom',
            },
        });
    };
    var addTask = function (title, description) { return __awaiter(void 0, void 0, void 0, function () {
        var newTask, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, addTaskApi(title, description)];
                case 1:
                    newTask = _b.sent();
                    setTasks(__spreadArray(__spreadArray([], tasks, true), [newTask], false));
                    showAlert('success', t('taskAdded'));
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    showAlert('error', t('failedToAddTask'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var updateTask = function (id, title, description) { return __awaiter(void 0, void 0, void 0, function () {
        var updated_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, updateTaskApi(id, { title: title, description: description })];
                case 1:
                    updated_1 = _b.sent();
                    setTasks(tasks.map(function (task) { return task._id === id ? updated_1 : task; }));
                    showAlert('success', t('taskUpdated'));
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    showAlert('error', t('failedToUpdateTask'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var deleteTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, deleteTaskApi(id)];
                case 1:
                    _b.sent();
                    setTasks(tasks.filter(function (task) { return task._id !== id; }));
                    showAlert('success', t('taskDeleted'));
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    showAlert('error', t('failedToDeleteTask'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var updateTaskStatus = function (id, completed) { return __awaiter(void 0, void 0, void 0, function () {
        var updated_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, updateTaskApi(id, { completed: completed })];
                case 1:
                    updated_2 = _b.sent();
                    setTasks(tasks.map(function (task) { return task._id === id ? updated_2 : task; }));
                    showAlert('success', t('taskUpdated'));
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    showAlert('error', t('failedToUpdateTask'));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var openAddModal = function () { return setIsAddModalOpen(true); };
    var closeAddModal = function () { return setIsAddModalOpen(false); };
    var openEditModal = function (task) {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };
    var closeEditModal = function () {
        setSelectedTask(null);
        setIsEditModalOpen(false);
    };
    return {
        tasks: tasks,
        addTask: addTask,
        updateTask: updateTask,
        deleteTask: deleteTask,
        loading: loading,
        isAddModalOpen: isAddModalOpen,
        isEditModalOpen: isEditModalOpen,
        openAddModal: openAddModal,
        closeAddModal: closeAddModal,
        openEditModal: openEditModal,
        closeEditModal: closeEditModal,
        selectedTask: selectedTask,
        updateTaskStatus: updateTaskStatus,
    };
};
export default useTasks;
