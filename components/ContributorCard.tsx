import styles from './ContributorCard.module.css'

interface Contributor {
	name: string;
	image: string;
	github?: string;
	kofi?: string;
}

const ContributorCard: React.FC<Contributor> = ({ name, image, github, kofi }) => {
	return (
		<div className={styles['contributor-card']}>
			<img src={image} alt={name} className={styles['contributor-image']} />
			<h3>{name}</h3>
			<div className={styles['social-links']}>
				{github && (
					<a href={'https://github.com/'+github} className={`${styles['social-button']} ${styles['social-github']}`} target="_blank" rel="noopener noreferrer">GitHub</a>
				)}
				{kofi && (
					<a href={'https://ko-fi.com/'+kofi} className={`${styles['social-button']} ${styles['social-kofi']}`} target="_blank" rel="noopener noreferrer">Ko-Fi</a>
				)}
			</div>
		</div>
	);
};

export default ContributorCard;
