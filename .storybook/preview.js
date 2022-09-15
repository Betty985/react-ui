import { addDecorator } from "@storybook/react";
import {withInfo} from "@storybook/addon-info"
addDecorator(
    withInfo({
        Headers:false,
        inline:true
    })
)