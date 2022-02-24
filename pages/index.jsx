import React from "react";
import Comment from "../components/Comment";
import StartDiscussion from "../components/StartDiscussion";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [discussions, setDiscussions] = React.useState({});

  React.useEffect(() => {
    //Fazer a chamada para a api utilizando services/ApiService e definir os dados recebidos para
    //o state discussions, utilizando o método setDiscusions
  }, []);

  return (
    <>
      <div className={styles.container}>
        {
          //Utilizar o map para percorrer todos os comentários
          //E atribuir os valores para as props correspondentes para cada comment
          //Para exibir todos os comentários vinculados a discussão, é necessário
          //utilizar um map dentro do outro, assim os dados serão lidos pela estrutura
        }

        <StartDiscussion src="https://www.adobe.com/br/express/create/media_1a1511af7d5bfa90614cee99fb7b599f28a47a132.jpeg?width=400&format=jpeg&optimize=medium" />
        <Comment
          src="https://www.adobe.com/br/express/create/media_1a1511af7d5bfa90614cee99fb7b599f28a47a132.jpeg?width=400&format=jpeg&optimize=medium"
          name="Bessie Cooper"
          time="3h ago"
          comment="I think for our second campaign we can try to target a different audience. How does it sound for you?"
          likes={2}
          isPrincipal={true}
        >
          <Comment
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            name="Marvin McKinney"
            time="2h ago"
            comment="Yes, that sounds good! I can think about this tomorrow. When do we plan to start that campaign?"
            likes={2}
            likedByActualUser={true}
          />
        </Comment>
      </div>
    </>
  );
}
