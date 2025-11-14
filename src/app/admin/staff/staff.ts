
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-view',
  standalone: false,
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})

export class Staff {
  staff = {
    id: 'EMP/2023-1011',
    name: 'Abeke Aileyipada',
    department: 'Sales',
    totalSignIns: 80,
    latenessCount: 12,
    deductions: 4800,
  };

  signInHistory = [
    { date: '2024-10-01', time: '08:25 AM', status: 'Late' },
    { date: '2024-10-02', time: '08:32 AM', status: 'Late' },
    { date: '2024-10-03', time: '08:15 AM', status: 'Late' },
    { date: '2024-10-04', time: '08:28 AM', status: 'Late' },
    { date: '2024-10-05', time: '08:17 AM', status: 'Late' },
    { date: '2024-10-06', time: '08:22 AM', status: 'Late' },
    { date: '2024-10-07', time: '08:09 AM', status: 'Late' },
    { date: '2024-10-08', time: '08:30 AM', status: 'Late' },

    { date: '2025-10-09', time: '07:58 AM', status: 'Early' },
    { date: '2025-10-10', time: '07:52 AM', status: 'Early' },
    { date: '2025-10-11', time: '07:45 AM', status: 'Early' },
    { date: '2025-10-12', time: '07:47 AM', status: 'Early' },
    { date: '2025-10-13', time: '07:55 AM', status: 'Early' },
    { date: '2025-10-14', time: '07:49 AM', status: 'Early' },
    { date: '2025-10-15', time: '07:53 AM', status: 'Early' },
    { date: '2025-10-16', time: '07:51 AM', status: 'Early' },
    { date: '2025-10-17', time: '07:46 AM', status: 'Early' },
    { date: '2025-10-18', time: '07:59 AM', status: 'Early' },
    { date: '2025-10-19', time: '07:54 AM', status: 'Early' },
    { date: '2025-10-20', time: '07:56 AM', status: 'Early' },
    { date: '2025-10-21', time: '07:44 AM', status: 'Early' },
    { date: '2025-10-22', time: '07:57 AM', status: 'Early' },
    { date: '2024-10-08', time: '08:30 AM', status: 'Late' },
    { date: '2024-10-08', time: '08:30 AM', status: 'Late' },
    { date: '2024-10-08', time: '08:30 AM', status: 'Late' },
    { date: '2024-10-08', time: '08:30 AM', status: 'Late' },
    { date: '2025-11-23', time: '07:43 AM', status: 'Early' },
    { date: '2025-11-24', time: '07:48 AM', status: 'Early' },
    { date: '2025-11-25', time: '07:41 AM', status: 'Early' },
    { date: '2025-11-26', time: '07:50 AM', status: 'Early' },
    { date: '2025-11-27', time: '07:47 AM', status: 'Early' },
    { date: '2025-11-28', time: '07:45 AM', status: 'Early' },
    { date: '2025-11-29', time: '07:40 AM', status: 'Early' },
    { date: '2025-11-30', time: '07:55 AM', status: 'Early' },
    { date: '2025-12-01', time: '07:59 AM', status: 'Early' },
    { date: '2025-12-02', time: '07:42 AM', status: 'Early' },
    { date: '2025-12-03', time: '07:49 AM', status: 'Early' },
    { date: '2025-12-04', time: '07:53 AM', status: 'Early' },
    { date: '2025-12-05', time: '07:50 AM', status: 'Early' },
    { date: '2025-12-06', time: '07:56 AM', status: 'Early' },
    { date: '2025-12-07', time: '07:58 AM', status: 'Early' },
    { date: '2025-12-08', time: '07:55 AM', status: 'Early' },
    { date: '2025-12-09', time: '07:52 AM', status: 'Early' },
    { date: '2025-12-10', time: '07:54 AM', status: 'Early' },
    { date: '2025-12-11', time: '07:59 AM', status: 'Early' },
    { date: '2025-12-12', time: '07:46 AM', status: 'Early' },
    { date: '2025-12-13', time: '07:48 AM', status: 'Early' },
    { date: '2025-12-14', time: '07:57 AM', status: 'Early' },
    { date: '2025-12-15', time: '07:51 AM', status: 'Early' },
    { date: '2025-12-16', time: '07:49 AM', status: 'Early' },
    { date: '2025-12-17', time: '07:55 AM', status: 'Early' },
  ];

}
