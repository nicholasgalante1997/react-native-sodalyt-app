
//Takes in id to itself
// Takes in prompt ie personal trainer 
//icon is icon name as in expo Vector Icons 
// Icon family is what specificfamily it belongs to 
// We have optional backgroundColor to use later for styling if requested . not in project now 
class Vertical {
    constructor(id, prompt, icon, iconFamily, backgroundColor){
        this.id = id;
        this.prompt = prompt;
        this.icon = icon;
        this.iconFamily = iconFamily;
        this.backgroundColor = backgroundColor;
    }
}

export default Vertical 