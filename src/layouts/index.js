import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <img
        className="logo"
        src="https://gigacover.com/img/logos/gc.logo-w-name.png"
        alt="gigacover-logo"
      />
      {props.children}
    </div>
  );
}

export default BasicLayout;
