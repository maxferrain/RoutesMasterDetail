import { Injectable } from "@angular/core";

export class District {
  ID: number;
  districtName: string;
  man1Dist: number;
  man2Dist: number;
  man3Dist: number;
  woman1Dist: number;
  woman2Dist: number;
  woman3Dist: number;
  totalDist: number;
}

export class Region {
  ID: number;
  regionName: string;
  man1Reg: number;
  man2Reg: number;
  man3Reg: number;
  woman1Reg: number;
  woman2Reg: number;
  woman3Reg: number;
  totalReg: number;
  districtID: number;
}

export class Route {
  ID: number;
  cityFrom: string;
  cityTo: string;
  man1Rou: number;
  man2Rou: number;
  man3Rou: number;
  woman1Rou: number;
  woman2Rou: number;
  woman3Rou: number;
  totalRou: number;
  regionID: number;
}

let districts: District[] = [
  {
    ID: 1,
    districtName: "ЦФО",
    man1Dist: 250,
    man2Dist: 637,
    man3Dist: 308,
    woman1Dist: 210,
    woman2Dist: 710,
    woman3Dist: 406,
    totalDist: 2521
  },
  {
    ID: 2,
    districtName: "ЮФО",
    man1Dist: 0,
    man2Dist: 0,
    man3Dist: 0,
    woman1Dist: 0,
    woman2Dist: 0,
    woman3Dist: 0,
    totalDist: 0
  },
  {
    ID: 3,
    districtName: "СЗФО",
    man1Dist: 0,
    man2Dist: 0,
    man3Dist: 0,
    woman1Dist: 0,
    woman2Dist: 0,
    woman3Dist: 0,
    totalDist: 0
  }
];

let regions: Region[] = [
  {
    ID: 1,
    regionName: "Тверская область",
    man1Reg: 10,
    man2Reg: 57,
    man3Reg: 23,
    woman1Reg: 11,
    woman2Reg: 55,
    woman3Reg: 23,
    totalReg: 179,
    districtID: 1
  },
  {
    ID: 2,
    regionName: "Москва",
    man1Reg: 240,
    man2Reg: 580,
    man3Reg: 285,
    woman1Reg: 199,
    woman2Reg: 655,
    woman3Reg: 383,
    totalReg: 2342,
    districtID: 1
  }
];

let routes: Route[] = [
  {
    ID: 1,
    cityFrom: "Тверь",
    cityTo: "Калязин",
    man1Rou: 2,
    man2Rou: 24,
    man3Rou: 13,
    woman1Rou: 3,
    woman2Rou: 25,
    woman3Rou: 14,
    totalRou: 81,
    regionID: 1
  },
  {
    ID: 2,
    cityFrom: "Калязин",
    cityTo: "Торжок",
    man1Rou: 5,
    man2Rou: 18,
    man3Rou: 7,
    woman1Rou: 4,
    woman2Rou: 15,
    woman3Rou: 6,
    totalRou: 55,
    regionID: 1
  },
  {
    ID: 3,
    cityFrom: "Тверь",
    cityTo: "Ржев",
    man1Rou: 3,
    man2Rou: 15,
    man3Rou: 3,
    woman1Rou: 4,
    woman2Rou: 15,
    woman3Rou: 3,
    totalRou: 43,
    regionID: 1
  },
  {
    ID: 4,
    cityFrom: "Москва",
    cityTo: "Клин",
    man1Rou: 10,
    man2Rou: 40,
    man3Rou: 25,
    woman1Rou: 9,
    woman2Rou: 50,
    woman3Rou: 33,
    totalRou: 167,
    regionID: 2
  },
  {
    ID: 5,
    cityFrom: "Москва",
    cityTo: "Одинцово",
    man1Rou: 60,
    man2Rou: 190,
    man3Rou: 40,
    woman1Rou: 50,
    woman2Rou: 185,
    woman3Rou: 50,
    totalRou: 575,
    regionID: 2
  },
  {
    ID: 6,
    cityFrom: "Москва",
    cityTo: "Химки",
    man1Rou: 170,
    man2Rou: 350,
    man3Rou: 220,
    woman1Rou: 140,
    woman2Rou: 420,
    woman3Rou: 300,
    totalRou: 1600,
    regionID: 2
  }
];

@Injectable()
export class Service {
  // getEmployees() {
  //   return employees;
  // }
  // getTasks() {
  //   return tasks;
  // }

  getDistricts() {
    return districts;
  }
  getRegions() {
    return regions;
  }
  getRoutes() {
    return routes;
  }
}
