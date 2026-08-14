// manual data used to fill the tables - no API, just plain arrays

interface LeaveApplication {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

interface LeaveSettingPlan {
  planName: string;
  duration: number;
  recallAutoRenew: string;
}

const ongoingLeaves: LeaveApplication[] = [
  { name: "aebeb geechu", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Casual", reason: "Personal" },
  { name: "aman bey", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Casual", reason: "Personal" },
  { name: "feven tesfaye", duration: 7, startDate: "22/04/2022", endDate: "28/06/2022", type: "Casual", reason: "Personal" },
  { name: "yanet tesfaye", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Casual", reason: "Personal" },
  { name: "beti woloe", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Casual", reason: "Personal" },
  { name: "dawit int", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Casual", reason: "Personal" },
  { name: "gelila oges", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Casual", reason: "Personal" }
];

const leaveHistory: LeaveApplication[] = [
  { name: "abebe gemechu", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
  { name: "aman bey", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Exam", reason: "Examination" },
  { name: "feven Tesfaye", duration: 120, startDate: "22/04/2022", endDate: "28/06/2022", type: "Maternity", reason: "Child Care" },
  { name: "gelila moges", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
  { name: "yanet tesfaye", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
  { name: "beti woloe", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
  { name: "dawit int", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" }
];

const leaveSettingsPlans: LeaveSettingPlan[] = [
  { planName: "Maternity", duration: 60, recallAutoRenew: "No / No" },
  { planName: "Sick", duration: 14, recallAutoRenew: "No / Yes" },
  { planName: "Compassionate", duration: 30, recallAutoRenew: "No / No" },
  { planName: "Exam", duration: 20, recallAutoRenew: "No / No" },
  { planName: "Paternity", duration: 60, recallAutoRenew: "No / No" },
  { planName: "Casual", duration: 10, recallAutoRenew: "Yes / No" },
  { planName: "Exam", duration: 20, recallAutoRenew: "No / No" }
];
