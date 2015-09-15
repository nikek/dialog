riot.tag('hello-world', '<h2>Hello, {opts.firstName}</h2> <input type="text" name="fname"> <button onclick="{updateName}">Update Name</button>', function(opts) {
    this.updateName = function() {
      opts.firstName = this.fname.value;
    }.bind(this);
  
});
