<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo").innerHTML =
  person.fullName() + " is " + person.age + " years old.";
</script>

</body>
</html>
