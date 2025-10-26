export abstract class Service {
  public validate(form: any, fields?: any[]): void {
    Object.keys(form).forEach((f) => {
      if (typeof form[f] === "string" && form[f]?.includes("<script>")) {
        form[f] = form[f].replace("<script>", "");
        form[f] = form[f].replace("</script>", "");
      }
    });

    if (fields?.length) {
      fields.forEach((f) => {
        if (!form.hasOwnProperty(f) || !form[f]) {
          throw { message: f + " field is required" };
        }
      });
    }
  }
}
