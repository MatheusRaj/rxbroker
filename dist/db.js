"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const tslib_1 = require("tslib");
const knex_1 = tslib_1.__importDefault(require("knex"));
let connection;
exports.init = ({ host, user, password }) => {
    connection = knex_1.default({
        client: 'mssql',
        connection: {
            host,
            user,
            password,
            database: 'maxyall_prod',
            options: {
                encrypt: true
            },
            requestTimeout: 180000,
            connectTimeout: 120000
        }
    });
};
exports.default = connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHdEQUF3QjtBQUV4QixJQUFJLFVBQVUsQ0FBQztBQUVGLFFBQUEsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDL0MsVUFBVSxHQUFHLGNBQUksQ0FBQztRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLFVBQVUsRUFBRTtZQUNWLElBQUk7WUFDSixJQUFJO1lBQ0osUUFBUTtZQUNSLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsY0FBYyxFQUFFLE1BQU07WUFDdEIsY0FBYyxFQUFFLE1BQU07U0FDdkI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga25leCBmcm9tICdrbmV4JztcblxubGV0IGNvbm5lY3Rpb247XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gKHsgaG9zdCwgdXNlciwgcGFzc3dvcmQgfSkgPT4ge1xuICBjb25uZWN0aW9uID0ga25leCh7XG4gICAgY2xpZW50OiAnbXNzcWwnLFxuICAgIGNvbm5lY3Rpb246IHtcbiAgICAgIGhvc3QsXG4gICAgICB1c2VyLFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBkYXRhYmFzZTogJ21heHlhbGxfcHJvZCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGVuY3J5cHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0VGltZW91dDogMTgwMDAwLFxuICAgICAgY29ubmVjdFRpbWVvdXQ6IDEyMDAwMFxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uO1xuIl19