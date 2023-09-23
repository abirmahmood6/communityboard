import React from 'react'
import Event from './event'

const Calendar = () => {

    return (
        <div className="Calendar">
            <table>


                <tbody>
                    <tr> {/* row 1*/}
                        <Event imgSrc="https://www.thedailymeal.com/img/gallery/the-halal-guys-is-trying-its-hand-at-a-middle-eastern-classic/l-intro-1671644308.jpg" name="Halal Guys" location='Corners of 53rd Street and Sixth Avenue' color='pink' />
                        <Event imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdb_8BRZLJ5CrsThZR9hD7mB28tJOnnsQUzMCcHAMJjspGxp5mPIeq79kL8pwUmRnkGY&usqp=CAU" name="Halal Munchies" location='120-36 Queens Blvd' color='pink' />
                        <Event imgSrc="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/poimacaqlbv83hb1of70" name="Zaitun Halal" location='87-69 Parsons Blvd, Queens, NY' color='pink' />
                    </tr>
                    <tr> {/* row 2 */}
                        <Event imgSrc="https://www.shahshalalfood.com/wp-content/themes/shahshalal/location/images/shahs-boston.jpg" name="Shah's Halal Food" location='133rd Street, Liberty Ave' color='orange' />
                        <Event imgSrc="https://www.zabihah.com/img/photos/50078.jpg" name="Chang Pai Halal Thai and Chinese" location=' 166-12 Hillside Ave., Queens, NY' color='orange' />
                        <Event imgSrc="https://lh3.googleusercontent.com/p/AF1QipOq9ON3JdrZJLaEATvAwP7H4X9JExc2TOPafE1Y=w1080-h608-p-no-v0" name="Sagar Restaurent" location='168-25B Hillside Ave' color='orange' />
                    </tr>
                    <tr> {/* row 3 */}
                        <Event imgSrc="https://cdn.vox-cdn.com/thumbor/qtHTFuJSzWv-sM7q0zgHb73YgyM=/0x0:4032x3024/1920x1440/filters:focal(1694x1190:2338x1834):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71225483/duzan_caroline_shin.0.jpg" name="Duzan" location='2411 Steinway St, Queens, NY 11103' color='pink' />
                        <Event imgSrc="https://cdn.vox-cdn.com/thumbor/k1vT6DHtIeKZlriP4rLhNoQt9qs=/0x0:4032x3024/1920x1440/filters:focal(1694x1190:2338x1834):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71225484/mombar_caroline_shin.0.jpg" name="Mombar" location='2522 Steinway St, Astoria, NY 11103' color='pink' />
                        <Event imgSrc="https://cdn.vox-cdn.com/thumbor/Oso10d5wHzLfR7nywLS2xUsTfvI=/0x0:3391x2707/1920x1440/filters:focal(1425x1083:1967x1625):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72059605/Mr_Chang___caroline_shin__2.0.jpeg" name="Mr. Chang Halal Chinese" location='25-45 Steinway St, Queens, NY 11103' color='pink' />
                    </tr>
                    <tr> {/* row 4 */}
                        <Event imgSrc="https://i.redd.it/vzha2bm3fqga1.jpg" name="Nur Thai" location='31-01 34th Avenue Astoria, NY' color='orange' />
                        <Event imgSrc="https://cdn.vox-cdn.com/thumbor/WayESZOV5Wq0TXCHNhEFToJEiMI=/0x0:3360x2240/1920x1440/filters:focal(1412x852:1948x1388):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71225487/Samis_Kabab_House_1.0.jpeg" name="Sami's Kabab House" location='35-57 Crescent St' color='orange' />
                        <Event imgSrc="https://lh3.googleusercontent.com/p/AF1QipMDftmLGKqAx2qdfooDO1Xx6wSu7p82kRnqM4S8=s1360-w1360-h1020" name="AZKA BBQ" location='87-16 Parsons Blvd, Queens, NY' color='orange' />
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Calendar