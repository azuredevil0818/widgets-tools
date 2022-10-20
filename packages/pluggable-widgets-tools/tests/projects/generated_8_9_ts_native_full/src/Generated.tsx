import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { BadgeSample } from "./components/BadgeSample";
import { GeneratedProps } from "../typings/GeneratedProps";
import { Style } from "./utils/common";

export interface BadgeStyle extends Style {
    container: ViewStyle;
    badge: ViewStyle;
    label: TextStyle;
}

export class Generated extends Component<GeneratedProps<BadgeStyle>> {
    private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <BadgeSample
                style={this.props.style}
                onClickAction={this.onClickHandler}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : "Default"} />
        );
    }

    private onClick(): void {
        if (this.props.onClickAction) {
            this.props.onClickAction.execute();
        }
    }
}
