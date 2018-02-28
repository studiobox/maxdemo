import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class SampleGrid {

    public rows: Array<any> = [];
    public columns: Array<any> = [];
    public config: any = {};

    public InitializeColumns() {
        return this.columns = [
            { title: 'Name', name: 'name', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Name'} },
            { title: 'Destination', name: 'Destination', type: 'string', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Destination'} },
            { title: 'File Name', name: 'File_Name', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by File Name'}  },
            { title: 'Package', name: 'Package', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Package'}  },
            { title: 'Est Departure', name: 'Est_Departure', type: 'date', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Departture'}  },
            { title: 'SLA Cutoff', name: 'SLA_Cutoff', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by CutOff'}  },
            { title: 'Act Delivery', name: 'Act_Delivery', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Delivery'}  },
            { title: 'Status', name: 'Status', type: 'number', sort: true, align: 'center', filtering: {filterString: '', placeholder: 'Filter by Stattus'}  }
        ];
    }

    public InitializeConfig() {
        return this.config = {
            paging: true,
            sorting: {columns: this.columns},
            filtering: {filterString: ''},
            className: ['table-striped', 'table-bordered']
        };
    }

    public changePage(page: any, data): Array<any> {
        const start = (page.page - 1) * page.itemsPerPage;
        const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public changeSort(data: any, gridConfig: any): any {
        if (!gridConfig.sorting) {
            return data;
        }

        const columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let columnType: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
            columnName = columns[i].name;
            columnType = columns[i].type;
            sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        if (columnType === 'date') {
            return data.sort((previous: any, current: any) => {
                let previousDateObj = new Date();
                const previousDate = previous[columnName];
                const previousDateString = previousDate.split(' ');
                const previousDateArray = previousDateString[0].split('/');
                const previousTimeArray = previousDateString[1].split(':');

                previousDateObj = new Date(previousDateArray[2],previousDateArray[1]-1,previousDateArray[0],previousTimeArray[0],previousTimeArray[1],previousTimeArray[2]); 

                let currentDateObj = new Date();
                const currentDate = current[columnName];
                const currentDateString = currentDate.split(' '); 
                const currentDateArray = currentDateString[0].split('/');
                const currentTimeArray = currentDateString[1].split(':');

                currentDateObj = new Date(currentDateArray[2],currentDateArray[1]-1,currentDateArray[0],currentTimeArray[0],currentTimeArray[1],currentTimeArray[2]); 

                if (previousDateObj.getTime() > currentDateObj.getTime()) {
                    return sort === 'desc' ? -1 : 1;
                } else if (previousDateObj.getTime() < currentDateObj.getTime()) {
                    return sort === 'asc' ? -1 : 1;
                }
                return 0;
            });
        } else if (columnType === 'string') {
            return data.sort((previous: any, current: any) => {
                if (previous[columnName] === null) {
                    return 1;
                } else if (current[columnName] === null) {
                    return -1;
                } else if (previous[columnName].toLowerCase() > current[columnName].toLowerCase()) {
                    return sort === 'desc' ? -1 : 1;
                } else if (previous[columnName].toLowerCase() < current[columnName].toLowerCase()) {
                    return sort === 'asc' ? -1 : 1;
                }
                return 0;
            });
        } else {
            return data.sort((previous: any, current: any) => {
                if (previous[columnName] === null) {
                    return 1;
                } else if (current[columnName] === null) {
                    return -1;
                } else  if (parseInt(previous[columnName], 2) > parseInt(current[columnName], 2)) {
                    return sort === 'desc' ? -1 : 1;
                } else if (parseInt(previous[columnName], 2) < parseInt(current[columnName], 2)) {
                    return sort === 'asc' ? -1 : 1;
                }
                return 0;
            });
        }
    }

    public changeFilter(data: any, gridConfig: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
          if (column.filtering) {
            filteredData = filteredData.filter((item: any) => {
              // if(item[column.name]!=null|| item[column.name]!=undefined){
                if (column.type === 'date' && column.filtering.filterString ) {
                  const itemDate = item[column.name].split(' ');
                  const columnDate = column.filtering.filterString;
                  const date2 = itemDate[0].split('/');
                  const dateObject = date2[2] + '-' + date2[1] + '-' + date2[0];
                  return moment(dateObject) === moment(columnDate);
                }
                return item[column.name]?item[column.name].toString().toLowerCase().match(this.convertSpecialCharacter(column.filtering.filterString.toLowerCase())):item;
              //  }
            });
          }
        });

        if (!gridConfig.filtering) {
          return filteredData;
        }
        if (gridConfig.filtering.columnName) {
          return filteredData.filter((item: any) =>
            item[gridConfig.filtering.columnName].match(this.config.filtering.filterString));
        }

        const tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
          let flag = false;
          this.columns.forEach((column: any) => {
            if (item[column.name] !== undefined || item[column.name] !== null) {
              if (item[column.name].toString().toLowerCase().match(this.convertSpecialCharacter(this.config.filtering.filterString.toLowerCase()))) {
                flag = true;
              }
            }
          });
          if (flag) {
            tempArray.push(item);
          }
        });
        filteredData = tempArray;
        return filteredData;
    }

    public convertSpecialCharacter(str: string): string {
        const regex = /\/|\\|\(|\)|\[|\]|\*|\+|\?|\|/g;
        let m;
        while ((m = regex.exec(str)) !== null) {
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          str = str.substr(0, m.index) + '\\' + str.substr(m.index);
          regex.lastIndex++;
        }
        return str;
    }
}
