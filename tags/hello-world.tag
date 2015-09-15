<hello-world>
  <h2>Hello, {opts.firstName}</h2>

  <input type="text" name="fname">
  <button onclick="{updateName}">Update Name</button>

  <script>
    updateName(){
      opts.firstName = this.fname.value;
    }
  </script>
</hello-world>
