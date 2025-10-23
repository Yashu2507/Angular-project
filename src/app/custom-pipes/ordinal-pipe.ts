import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number) {
    const rem = num % 10;
    if (rem === 1) {
      return num === 11 ? num + 'th' : num + 'st';
    } else if (rem === 2) {
      return num + 'nd';
    } else if (rem === 3) {
      return num + 'rd';
    } else {
      return num + 'th';
    }
  }
}

@Pipe({
  name: 'roman',
})
export class RomanPipe implements PipeTransform {
    transform(value: number): string {
   if (value <= 0) return '';

    const romanMap = [
      { num: 1000, sym: 'M' },
      { num: 900,  sym: 'CM' },
      { num: 500,  sym: 'D' },
      { num: 400,  sym: 'CD' },
      { num: 100,  sym: 'C' },
      { num: 90,   sym: 'XC' },
      { num: 50,   sym: 'L' },
      { num: 40,   sym: 'XL' },
      { num: 10,   sym: 'X' },
      { num: 9,    sym: 'IX' },
      { num: 5,    sym: 'V' },
      { num: 4,    sym: 'IV' },
      { num: 1,    sym: 'I' }
    ];

    let result = '';

    // ✅ Just a simple for loop — clean and clear
    for (let i = 0; i < romanMap.length; i++) {
      while (value >= romanMap[i].num) {
        result += romanMap[i].sym;
        value -= romanMap[i].num;
      }
    }

    return result;
  }
}


@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(birthDate: Date) {
    if (!birthDate) return '';

    //input date will be 2025-09-29
    const formattedDate = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - formattedDate.getFullYear();

    if (age == 0) return 'just Born';

    return age == 1 ? `1 year old` : `${age} years old`;
  }
}

@Pipe({
  name: 'salutation',
})
export class salutationPipe implements PipeTransform {
  transform(name: String, gender: string) {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.' + name;
    } else {
      return 'Ms.' + name;
    }
  }
}

@Pipe({
  name: 'searchemployee',
})
export class searchEmployee implements PipeTransform {
  transform(employees: any[], searchText: String) {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();

    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchText) ||
        emp.department.toLowerCase().includes(searchText) ||
        emp.gender.toLowerCase().includes(searchText)
    );
  }
}
