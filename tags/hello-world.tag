<hello-world>
  <h2>Hello, {opts.firstName}</h2>

  <input type="text" name="fname" class="form-control">
  <button onclick="{updateName}" class="btn btn-default">Update Name</button>

  <script>
    updateName(){
      opts.firstName = this.fname.value;
    }
  </script>
</hello-world>
