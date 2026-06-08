export const analyticsStats = {
  averageChargingDuration: "35 min",
  averageDwellTime: "35 min",
  averageChargingToParkingRatio: "100%",
  topLocations: [
    { name: "RAKTA", count: 37 }
  ],
  bottomLocations: [
    { name: "RAKTA", count: 37 }
  ],
  chartData: [
    { time: "12a", value: 10, fill: "#737373" },
    { time: "1a", value: 15, fill: "#737373" },
    { time: "2a", value: 10, fill: "#737373" },
    { time: "3a", value: 5, fill: "#737373" },
    { time: "4a", value: 5, fill: "#737373" },
    { time: "5a", value: 8, fill: "#737373" },
    { time: "6a", value: 12, fill: "#737373" },
    { time: "7a", value: 25, fill: "#737373" },
    { time: "8a", value: 15, fill: "#737373" },
    { time: "9a", value: 30, fill: "#737373" },
    { time: "10a", value: 20, fill: "#737373" },
    { time: "11a", value: 45, fill: "#737373" },
    { time: "12p", value: 65, fill: "#737373" },
    { time: "1p", value: 50, fill: "#737373" },
    { time: "2p", value: 60, fill: "#737373" },
    { time: "3p", value: 85, fill: "#10B3A3" }, // Active
    { time: "4p", value: 70, fill: "#737373" },
    { time: "5p", value: 65, fill: "#737373" },
    { time: "6p", value: 55, fill: "#737373" },
    { time: "7p", value: 45, fill: "#737373" },
    { time: "8p", value: 35, fill: "#737373" },
    { time: "9p", value: 45, fill: "#737373" },
    { time: "10p", value: 30, fill: "#737373" },
    { time: "11p", value: 20, fill: "#737373" }
  ]
};

export const liveCameras = [
  {
    id: "CAM-101",
    name: "Parking Cam 2",
    zone: "Ground Floor Parking",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop", // Using EV image as placeholder for now
    plate: "3529",
    timestamp: "06-04-2026 Thu 15:49:34"
  },
  {
    id: "CAM-102",
    name: "Parking Cam 1",
    zone: "Basement Parking",
    status: "online",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop", 
    plate: "3296",
    timestamp: "06-04-2026 Thu 15:49:34"
  }
];

export const alertsData = [
  { id: 1, title: 'Tamper Detection', priority: 'High', site: 'RAKTA', camera: 'Parking Cam 2' },
  { id: 2, title: 'Tamper Detection', priority: 'High', site: 'RAKTA', camera: 'Parking Cam 2' },
  { id: 3, title: 'Camera Offline', priority: 'High', site: 'RAKTA', camera: 'Parking Cam 1' },
  { id: 4, title: 'Camera Offline', priority: 'High', site: 'RAKTA', camera: 'Parking Cam 1' },
];

export const parkingData = [
  { id: 1, site: 'RAKTA', totalBays: 2, availableBays: 0, occupiedBays: 2 }
];

export const usersData = [
  { id: 1, name: 'Yesh Reddy', email: 'yesh@brihaspathi.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Viewer', status: 'Inactive' }
];

export const groupsData = [
  { id: 1, name: 'Administrators', usersCount: 1, description: 'Full access to all systems' },
  { id: 2, name: 'Viewers', usersCount: 1, description: 'Read-only access to monitoring' }
];

export const escalationData = [
  { id: 1, ruleName: 'Critical Alert', level: 'Level 1', contact: 'yesh@brihaspathi.com' }
];

export const alertRulesData = [
  { id: 1, name: 'Tamper Alarm', trigger: 'Camera Disconnected', status: 'Enabled' }
];

export const locationsData = [
  { id: 1, name: 'RAKTA', address: 'Dubai, UAE', status: 'Active', cameras: 2 }
];

export const detectionsData = [
  { id: 1, plate: '3521', bay: 'B02', emirate: 'Ras Al Khaimah', occupied: '08 May 2026, 10:12 AM', departed: '-' },
  { id: 2, plate: '23342', bay: 'B02', emirate: 'Dubai', occupied: '08 May 2026, 9:32 AM', departed: '08 May 2026, 9:44 AM' },
  { id: 3, plate: '3407', bay: 'B02', emirate: 'Ras Al Khaimah', occupied: '08 May 2026, 9:06 AM', departed: '08 May 2026, 9:27 AM' },
  { id: 4, plate: '3527', bay: 'B02', emirate: 'Ras Al Khaimah', occupied: '08 May 2026, 8:12 AM', departed: '08 May 2026, 8:28 AM' },
  { id: 5, plate: '3999', bay: 'B01', emirate: 'Ras Al Khaimah', occupied: '08 May 2026, 8:11 AM', departed: '08 May 2026, 9:07 AM' },
  { id: 6, plate: '3497', bay: 'B02', emirate: '-', occupied: '08 May 2026, 12:39 AM', departed: '08 May 2026, 1:47 AM' },
  { id: 7, plate: '3888', bay: 'B01', emirate: '-', occupied: '08 May 2026, 12:08 AM', departed: '08 May 2026, 12:46 AM' },
  { id: 8, plate: '3407', bay: 'B01', emirate: 'Ras Al Khaimah', occupied: '07 May 2026, 10:54 PM', departed: '07 May 2026, 11:30 PM' },
];

export const nvrData = [
  { 
    id: 1, 
    nvrName: 'RAKTA', 
    siteName: 'RAKTA', 
    nvrIp: '192.168.1.2', 
    contact: 'Mogammad Jameel Isaacs', 
    createdAt: '20 Apr 2026, 11:08 AM', 
    status: 'Active' 
  }
];
