angular.module('upsampling3dLayer', [])
    .service('upsampling3dLayer', [UpSampling3dLayer]);

function UpSampling3dLayer() {

    // this.getSubSamplingTypes = function () {
    //     return [
    //         {value: "max_pooling", text: "Max Pooling"},
    //         {value: "average_pooling", text: "Average Pooling"}
    //     ];
    // };

    this.getDefault = function () {
        return {
            "id": 0,
            "name": "UpSampling3D",
            "layerType": 'upsampling3d',
            "category": "basic: upsampling",
            "params": {
                "subsamplingSizeWidth":  2,
                "subsamplingSizeHeight": 2,
                "subsamplingSizeDepth":  2
            }
        }
    };
        
    this.getTemplatePath = function () {
      return "frontend/components/layers/basic/upsampling3d/upsampling3d.svg";
    };
    
    this.getIconPath = function () {
        return "frontend/assets/img/palette/basic/layer-upsampling-3d-v1.png"
    };
}
