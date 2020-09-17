import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxDataGridModule, DxTemplateModule } from "devextreme-angular";
import { Service, District, Region, Route } from "./app.service";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";

// if (!/localhost/.test(document.location.host)) {
//     enableProdMode();
// }

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  // employees: Employee[];
  // tasks: Task[];
  districts: District[];
  regions: Region[];
  routes: Route[];

  // tasksDataSourceStorage: any;
  regionsDataSourceStorage: any;
  routesDataSourceStorage: any;

  constructor(private service: Service) {
    // this.employees = service.getEmployees();
    // this.tasks = service.getTasks();
    this.districts = service.getDistricts();
    this.regions = service.getRegions();
    this.routes = service.getRoutes();
    // this.tasksDataSourceStorage = [];
    this.regionsDataSourceStorage = [];
    this.routesDataSourceStorage = [];
  }

  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

  // getTasks(key) {
  //   let item = this.tasksDataSourceStorage.find((i) => i.key === key);
  //   if (!item) {
  //     item = {
  //       key: key,
  //       dataSourceInstance: new DataSource({
  //         store: new ArrayStore({
  //           data: this.tasks,
  //           key: "ID"
  //         }),
  //         filter: ["EmployeeID", "=", key]
  //       })
  //     };
  //     this.tasksDataSourceStorage.push(item);
  //   }
  //   return item.dataSourceInstance;
  // }

  getRegions(key) {
    let item = this.regionsDataSourceStorage.find((i) => i.key === key);
    if (!item) {
      item = {
        key: key,
        dataSourceInstance: new DataSource({
          store: new ArrayStore({
            data: this.regions,
            key: "ID"
          }),
          filter: ["districtID", "=", key]
        })
      };
      this.regionsDataSourceStorage.push(item);
    }
    return item.dataSourceInstance;
  }

  getRoutes(key) {
    let item = this.routesDataSourceStorage.find((i) => i.key === key);
    if (!item) {
      item = {
        key: key,
        dataSourceInstance: new DataSource({
          store: new ArrayStore({
            data: this.routes,
            key: "ID"
          }),
          filter: ["regionID", "=", key]
        })
      };
      this.routesDataSourceStorage.push(item);
    }
    return item.dataSourceInstance;
  }
}

@NgModule({
  imports: [BrowserModule, DxDataGridModule, DxTemplateModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
