class UserConnector {
  constructor (url) {
    this.url = url;
  }

  async connect () {
    const response = await fetch(this.url);
    this.data = await response.json();
  }

  count () {
    return this.data.users.length;
  }

  filterNameStartsWith (startString) {
    const resultUsers = this.data.users
      .filter(usersNameStartsWith => usersNameStartsWith.firstName.startsWith(startString));
    return resultUsers;
  }

  filterOlderThan (lowerAgeTreshold) {
    const minimumDate = new Date();
    minimumDate.setFullYear(minimumDate.getFullYear() - lowerAgeTreshold);
    const resultUsers = this.data.users
      .filter(user => {
        const bD = new Date(user.birthDate);
        return bD.getTime() < minimumDate.getTime();
      });
    return resultUsers;
  }

  companyDepartments () {
    const deparments = [];
    for (const user of this.data.users) {
      if (!deparments.includes(user.company.department)) {
        deparments.push(user.company.department);
      }
    }
    return deparments;
  }

  averageHeight () {
    const totalHeight = this.data.users.reduce((sum, user) => {
      return sum + user.height;
    }, 0);

    const average = totalHeight / this.count();
    return Math.round(average * 100) / 100;
  }
}
(async function fetchData () {
  const a = new UserConnector('https://dummyjson.com/users');
  await a.connect();
  console.log('Count');
  console.log(a.count());
  console.log('Filtered Name');
  const filteredName = a.filterNameStartsWith('A');
  for (const user of filteredName) {
    console.log(user);
  }
  console.log('Filtered Age');
  const filteredAge = a.filterOlderThan(60);
  for (const user of filteredAge) {
    console.log(user);
  }
  console.log('Departments');
  console.log(a.companyDepartments());
  console.log('Average height');
  console.log(a.averageHeight());
})();
