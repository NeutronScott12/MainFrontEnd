import * as React from 'react'

import { Value } from 'slate'
import { Editor } from 'react-slate'

// @ts-nocheck
const initialValue = Value.fromJSON({
	// document: {
	// 	nodes: [
	// 		{
	// 			object: 'block',
	// 			type: 'paragraph',
	// 			nodes: [
	// 				{
	// 					object: 'text',
	// 					// text: 'A line of text in a paragraph'
	// 					leaves: [
	// 						{
	// 							text: 'My first paragraph'
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	]
	// }
})

interface IProps {
	setFieldValue: any
}

class TextEditor extends React.Component<IProps> {
	state = {
		value: initialValue,
		editor: undefined
	}

	onKeyDown = () => {}

	ref = (editor: any) => {
		this.state.editor = editor
	}

	onChange = ({ value }: any) => {
		this.setState({ value })
		this.props.setFieldValue('body', value, false)
	}

	render() {
		return (
			<Editor
				// spellCheck
				ref={this.ref}
				onKeyDown={this.onKeyDown}
				value={this.state.value}
				onChange={this.onChange}
			/>
		)
	}
}

export default TextEditor
