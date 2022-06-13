import { EmployeeCreatedDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreatedDTO): Promise<Employee>;
    findOne(id: string): Promise<Employee>;
}
