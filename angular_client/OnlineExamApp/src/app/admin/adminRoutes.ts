import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { CreatingExamComponent } from "./creating-exam/creating-exam.component";
import { EvaluationComponent } from "./evaluation/evaluation.component";
import { ManagingStaffComponent } from "./managing-staff/managing-staff.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AdminhomeComponent } from "./adminhome/adminhome.component";

export const routes: Routes = [
    { path: '', component: AdminLoginComponent },
    {
        path: 'home', component: AdminhomeComponent, children: [
            { path: 'exam', component: CreatingExamComponent },
            { path: 'evaluation', component: EvaluationComponent },
            { path: 'managestaff', component: ManagingStaffComponent }
        ]

    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);