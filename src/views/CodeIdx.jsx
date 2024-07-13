import React, { useState } from "react";
import CodeList from "../cmps/CodeList";
import { userService } from "../services/user.service";
import { eventBus, showSuccessMsg } from "../services/event-bus.service";

function CodeIdx({ codes }) {

  const [quests, setQuests] = useState([...codes]);
  const [user, setUser] = useState(userService.getLoggedInUser());





  const updateUser = async (ev, key, value) => {
    ev.stopPropagation();
    console.log('key', key);
    switch (key) {
      case 'favorites':

        let msg = 'Code quest Added to favorites'
        if (user.favorites.includes(value)) {
          const updatedUser = { ...user, favorites: user.favorites.filter(fav => fav !== value) };
          const updateUser = await userService.save(updatedUser);
          msg = 'Code quest removed from favorites'
          showSuccessMsg(msg)
          setUser(updateUser);
          return
        }
        const updatedUser = { ...user, favorites: [...user.favorites, value] };

        const updateUser = await userService.save(updatedUser);
        showSuccessMsg(msg)
        setUser(updateUser);

        break;

      default:
        break;
    }

  };

  const props = {
    codes: quests,
    updateUser,
    favorites: user.favorites,
  };

  if (!user && quests) return <h1>Loading</h1>
  return (
    <section className="code-idx">
      <h1>Lobby</h1>

      <CodeList {...props} />
    </section>
  );
}

export default CodeIdx;