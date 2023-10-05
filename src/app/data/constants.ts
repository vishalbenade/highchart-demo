import { HighchartColorsModel } from "../models/highchart-colors.model";
import { HighchartTypeModel } from "../models/highchart-type.model";

export class HighchartConstants {
    public static getHighchartColors: Array<HighchartColorsModel> =
        [
            { colorId: 1, colorName: "Green" },
            { colorId: 2, colorName: "Blue" },
            { colorId: 3, colorName: "Yellow" },
            { colorId: 4, colorName: "Red" },
            { colorId: 5, colorName: "Purple" },
            { colorId: 6, colorName: "Grey" },
            { colorId: 7, colorName: "Orange" }
        ]

        public static getHighchartTypes: Array<HighchartTypeModel> =
        [
            { chartTypeId: 1, chartTypeName: "Bar", chartTypeValue:'bar' },
            { chartTypeId: 2, chartTypeName: "Pie", chartTypeValue:'pie' },
            { chartTypeId: 3, chartTypeName: "Line", chartTypeValue:'line' },
        ]
}