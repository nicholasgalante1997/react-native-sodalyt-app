import Vertical from './vertical'

class Subvertical extends Vertical {
    constructor(id, prompt, icon, iconFamily, parentVerticalId){
        super(id, prompt, icon, iconFamily);
        this.parentVerticalId = parentVerticalId;
    }
}

export default Subvertical