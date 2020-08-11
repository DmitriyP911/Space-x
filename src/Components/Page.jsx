import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import shortid from 'shortid';
import style from '../styles/pageStyles.module.css';

const Page = () => {
    const [value, setValue] = useState( '' );
    const query = gql`
{
    launches(find: {launch_year: "${value.length === 4 ? value : null}"}) {
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`
    const { data } = useQuery( query );
    return (
        <div>
            <form
                className={style.form}
                action="submit">
                <input
                    className={style.input}
                    onChange={event => setValue( event.target.value )}
                    value={value}
                    name='inputValue'
                    type="text"
                    placeholder="Enter year..."
                />

            </form>
            {
                data !== undefined &&
                < div >
                    <h2 className={style.title}>Space-x info</h2>
                    <ul className={style.list}>
                        {
                            data.launches.map( launch => {
                                return (
                                    <li
                                        className={style.listItem}
                                        key={shortid.generate()}>
                                        <p>{launch.mission_name}</p>
                                        <p>{launch.launch_date_utc}</p>
                                        <p>{launch.launch_site.site_name_long}</p>
                                        {
                                            launch.links.flickr_images.length ? launch.links.flickr_images.map( url => {
                                                return (
                                                    <img
                                                        className={style.listItemImg}
                                                        key={shortid.generate()}
                                                        src={url}
                                                        alt=""
                                                    />
                                                )
                                            } ) : <p>Sorry we cant find any photo</p>
                                        }
                                        <p>{launch.rocket.rocket_name}</p>
                                    </li>
                                )
                            } )}
                    </ul>
                </div>
            }
        </div >
    )
}

export default Page;

