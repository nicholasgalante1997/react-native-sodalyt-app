import Vertical from './vertical'

class Subvertical extends Vertical {
    constructor(id, prompt, icon, iconFamily, backgroundColor, parentVerticalId){
        super(id, prompt, icon, iconFamily, backgroundColor);
        this.parentVerticalId = parentVerticalId;
    }
}

export default Subvertical