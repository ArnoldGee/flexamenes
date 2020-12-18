import Head from 'next/head';

import Header from '../components/Header';
import Section from '../components/Section';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flexámenes</title>
        <meta
          name="description"
          content="Flexámenes es aprendizaje y evaluación de calidad. Nuestra misión: garantizar la calidad de los cursos online, ofreciendo sevicios para que los estudiantes puedan asistir a un examen presencial y validar su aprendizaje"
        ></meta>
      </Head>
      <Header>
        <div>
          <h1>Flexámenes</h1>
          <p>Formación online. Aprendizaje real.</p>
        </div>
        <img
          className={styles.header__image}
          src="/assets/learning-online.svg"
          alt="A woman learning online"
        />
      </Header>
      <Section>
        <h3 id="introduction">
          Una solución real <br /> para el aprendizaje del futuro
        </h3>
        <p>
          La educación online ya no es cosa de mañana. Es un negocio
          multimillonario que permite a millones de personas acceder a una
          formación permanente de calidad.{' '}
          <strong>Sin embargo, aún queda un gran reto para resolver.</strong>
        </p>
        <blockquote>
          ¿Cómo <strong>garantizamos la calidad de los certificados?</strong>
        </blockquote>
        <p>
          Necesitamos una solución flexible para{' '}
          <strong>prevenir el fraude</strong> y asegurar que la evaluación es
          segura y de calidad.
        </p>
        <h3>Y aquí es donde entramos nosotros</h3>
        <p>
          Ofrecemos servicios para que los estudiantes de cursos online puedan
          asistir a exámenes presenciales. De esta forma, aseguramos la calidad
          del proceso de evaluación.
        </p>
        <blockquote>
          Nuestra misión: conseguir{' '}
          <strong>
            que la educación en línea tenga la misma calidad que el aprendizaje
            presencial
          </strong>
          .
        </blockquote>
        <p>¿Estás con nosotros?</p>
        <img
          className={styles.section__image}
          src="/assets/creativity.svg"
          alt="A man who's just had an idea"
        />
      </Section>
    </div>
  );
}
