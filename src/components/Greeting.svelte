<script lang="ts">
  const currentDate = new Date();
  const currenhtHour = currentDate.getHours();

  let greeting = "";

  if (currenhtHour < 12) {
    greeting = "Buenos Dias";
  } else if (currenhtHour < 18) {
    greeting = "Buenos tardes";
  } else {
    greeting = "Buenas noches";
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
