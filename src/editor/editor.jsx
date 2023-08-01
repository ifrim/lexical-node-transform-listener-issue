import {useEffect} from 'react';
import {TextNode} from 'lexical';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

function TextTransformPlugin() {
	const [editor] = useLexicalComposerContext();

	useEffect(editor.registerNodeTransform(TextNode, () => {}), []);
}

function Editor({ withPlugin, withOnChange, onChange }) {
	const initialConfig = {
		namespace: 'Lex',
		onError: console.error,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<PlainTextPlugin
				contentEditable={<ContentEditable />}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			{withPlugin && (
				<TextTransformPlugin />
			)}
			<OnChangePlugin onChange={withOnChange ? onChange : () => {}} />
		</LexicalComposer>
	);
}

export default Editor;