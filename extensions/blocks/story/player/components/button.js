/**
 * External dependencies
 */
import { html } from 'htm/preact';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './icons.scss';

export const MaterialIcon = ( { icon, size } ) => html`
	<i class="material-icons ${icon} md-${size}"></i>
`;

export const Button = ( {
	label,
	icon,
	onClick,
	size = 24,
	iconSize = 24,
	className = null,
	circled = false,
	outlined = false,
	bordered = false,
} ) => {
	return html`
		<button
			class=${classnames( {
				'mdc-icon-button': true,
				'circle-icon': circled,
				outlined: outlined,
				bordered: bordered,
				[ `md-${ size }` ]: true,
				[ className ]: !! className,
			} )}
			aria-label="${label}"
			aria-pressed="false"
			onClick=${onClick}
		>
			${typeof icon === 'function'
				? html`
						<${icon} size=${iconSize} />
				  `
				: html`
						<${MaterialIcon} icon=${icon} size=${iconSize} />
				  `}
		</button>
	`;
};

export const DecoratedButton = props => html`
	<${Button} circled outlined bordered size=${64} iconSize=${36} ...${props} />
`;

export const SimpleButton = props => html`
	<${Button} buttonSize=${24} ...${props} />
`;
