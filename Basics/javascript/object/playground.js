class railwayform {
  get submit() {
    console.log("form submitted");
  }
  get cancel() {
    console.log("form canceled");
  }
}
const joe = new railwayform();
joe.submit;
