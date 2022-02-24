import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import Card from './components/Card'


function ChooseYourPokemon () {

  return (
    <div className='wrapper'>
      <div className='row'>
        <Card 
        name = 'Bulbasaur'
        image = 'https://68.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif'
        info = 'Bulbasaur (フシギダネ Fushigidane) is a Grass/Poison-type Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.'
        link = 'https://pokemon.fandom.com/wiki/Bulbasaur'/>

        <Card 
        name = 'Charmander'
        image = 'https://i.imgur.com/VexuoSc.gif'
        info = 'Charmander (ヒトカゲ Hitokage) is a Fire-type Pokémon. It evolves into a Charmeleon starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.'
        link = 'https://pokemon.fandom.com/wiki/Charmander'/>
      </div>
      <div className='row2'>
        <Card 
        name = 'Squirtle' 
        image = 'https://38.media.tumblr.com/858eb8f2e328e44c24ce6047665f225e/tumblr_mrtn38OLHh1sdsdm5o1_500.gif' 
        info = 'Squirtle (ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16. It is one of the three Starter Pokémon that can be chosen in Kanto region.'
        link = 'https://pokemon.fandom.com/wiki/Squirtle'/>
        <Card 
        name = 'Pikachu'
        image = 'https://data.whicdn.com/images/115629818/original.gif'
        info = 'Pikachu (ピカチュウ Pikachuu) is an Electric-type Pokémon which was introduced in Generation I. Pikachu is renowned for being the most well-known and recognizable Pokémon. Over the years, Pikachu has become so popular that it serves as the Pokémon franchise mascot.'
        link = 'https://pokemon.fandom.com/wiki/Pikachu'/>
      </div>
    </div>
  )
}

reactDom.render(
<ChooseYourPokemon/>,
document.getElementById('root')
)
