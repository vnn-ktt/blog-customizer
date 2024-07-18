import { CSSProperties, useState } from 'react';
import { defaultArticleState } from '../../constants/articleProps';
import clsx from 'clsx';
import { Article } from '../../components/article/Article';
import { ArticleParamsForm } from '../../components/article-params-form/ArticleParamsForm';
import styles from './App.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	} as CSSProperties);
	return (
		<div className={clsx(styles.main)} style={articleState}>
			<ArticleParamsForm setArticleState={setArticleState} />
			<Article />
		</div>
	);
};
