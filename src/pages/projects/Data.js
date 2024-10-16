import ecom from '../../assests/ecom.png'
import ss from '../../assests/ss.png'
import movie from '../../assests/movie.png'
import book from '../../assests/book.png'
import medicare from '../../assests/medicare.png'
import recipe from '../../assests/recipe.png'
import crud from '../../assests/crud.png'



export const projectData=[
 
    {
        id:2,
        img:'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D',
        title:'Spotify',
        category:'Javascirpt',
        link:'http://spotify-music-project.surge.sh'
    },
    {
        id:4,
        img:ss,
        title:'Js Protfolio',
        category:'Javascirpt',
        link:'http://js-portfolios.surge.sh'
    },
    {
        id:9,
        img:crud,
        title:'CRUD',
        category:'React',
        link:'https://react-crud-eosin-seven.vercel.app/'
        
    },
    {
        id:10,
        img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSEBAQFhUXFhcVFhUYGBUVFRcXFhUXFxoVFxUaHSggGBonGxUVITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGhAQGyslICUtLSstKystKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAgMEAf/EAFkQAAEDAgEHBgYLCQ0IAwAAAAEAAgMEEQUGBxIhMUFREyJhcYGRMkJSobHBFBYXI2JykpOywtEzNFNUc3WC0uIlNUNVY2RldIOio7PDJDZEVpS00/AVReH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAyEQACAgECBAMGBgIDAAAAAAAAAQIDEQQhBRIxQVFh8BMycYGRsRQVIkKh8cHhI1LR/9oADAMBAAIRAxEAPwDcUREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARFTMtssRR+9QhrpyLm/gxg7CRvJ3DtO68NpLLNaaZ3TUILLLRXV8MDdKaVkbeLiGjzqBly+wxpt7IcelsUzh3hllnmFZO1+KP5Z7jY6jNLfX0NaNo1bBYK0xZrYrc+qkJ36LGNHcbnzrJTm+iPTlo9HS+W6xuXhH+izUmV1BMQGVMdzudeM9zwFOXvsWX4jmwkAJgqA7VqY8aBPRpgkeZRGAZQ1WFzcjM2Tk2mz4nbWjymHz2BsVPO17yIfD6bot6Wzma/a1h/ZevA2hVzL7EZaXDaiaB+hIxg0XWBsS5rb2cCNhO0KbpahkrGyRuDmuAc0jYQdYKrOdh1sHqvis/zWLU8gnsDqHS0sEjzdz4o3OOy5cwEmw6SpBRuTotR0/5GL6DVyxnFI6SF00ps1u7e4nUGjpJQmKcmkurPRWVUcLDJK9rGNFy5xsB2qn12cujZfkWSynjYRtPa7X5lSaurrcYqNFrSba2sBIjjbs0nHcfhHWdw3K6YVm2pGNHshz5X7TZzo2dQDTcjrKx55S909f8HptMl+Kk3L/rHt8fXwyRLc6cmlro2aO+0jr269CytGC5b0VS4M03RvOxsgtcncH+CT0XuvVLkhh7maHsWIDi0aLh0h45wPaqTlTm9MTHS0hc4AEuidrdbeWu8bqOv0F/yR36hfl175EnW+zzlfPLZqiLN82+VLnkUk7y42vE86yQAPeyd+q5B4AhaQtIyUllHn6nTT09jrn/AGvEpmBY3US41X0r33hhjhMbNFo0S5oLjpAXNy7eeCuaz/J0WyjxHphhPc1gVxxkTGnlFObS6DtA6vCtqtfV3qxzN4R70WU4BllUUspjqjI9mlZwdcyRneRfWfins6dNoquOaNskTg5jhcEf+6j0IZ1XRsW30PSiKByoyhjoY7nnSOvoM4nieDRx7ENJSUVlnrxTG6al0RPK1hdsFiTq32ANh0nUpBjwQCCCCLg7iDvWP4VhtTi1S58jja/vkm5o3MaONjqG7aenXqaFsbGsaLNa0NA6Giw9CGVNsrMvG3Y7URENgiIgCIiAjsdxJtLTyTu8RtwOLjqa3tJAWTZHYM7Eatz53FzGnlJTs0nOJs3ouQeoC28K751XkUFtzpWA9gc4edoXDNRE0UTnDa6U3/Ra0DzLGS5ppM9jTSen0M7o+9J8ufDbt/PpFyijDQGtAAAsANQAG4BdiItjxwqVnLwRs9KZ2j3yEaV+Md+c3s2jq6VdVDZXTiOgqHH8E4drhojzlVkk4vJvpZyhdCUOuV9yr5psSLopadx+5kPZ8V5Nx2OBP6S92eF1sFqf7L/PjUDmipyZp5NzWNb2uc4+hvnUznpdbBKnrh/7iJVqeYo6eKxjHVzUfJ/NpNlowH70g/Ix/QCzfOtiTn1LKcE6LG6RHF7/AFho/vFaVgf3rB+Sj+gFkmNjlsbc1x1eyYhr4NMYt5vOouf6cGvB4r27sf7Yt+v5NLyRwJtFTNZYco4B0ruLyPQNg6lPIi0SxseZOcpyc5PLe4REUlTFstKP2DiOnDqBLZ2W3HSJLerSaex1lsdLMJGNeNjmhw7RdZLnUqQ+taxussjY0/GJc63c5vetVwyExwRsO1rGtPWGgLKvaUsHr8QblptPKXXD+i6f+/MpeAf7x4h+Qh+ixX9UDJ//AHjxH8hD9Fiv61PIK5lRktFWt0tTJgObJbb8F43jzhZ9h9fV4TUFjmm1+fGTzXjZptPHVqd2Ho2RQeVeF09RTuNQQwMBcJd7NW3pHRvQ5rqc/rjszjJlRTCkNUHXbsDfG07fcyNzvVr2LOaCkqMWrC55tfW926OO+prfOAOs8VXzwB1d1+my1XN/U0nscRQG0g50rXanl1hd3S3YBbYo6nOp/iJJS2X3LHh1BHTxNiiaGtaNQ3niSd5PFexEUnopY2QREQBERAEREBXcu8NNRQysaLubaRo3ksIJHaLjtVQzU401jn0r3eHZ8Z4uA0XN7QGkdRWorI8tskpKaU1NKHGMu0yG+FE697i2vRvruNnUsrE0+ZHraCddlUtLY8c28X4P1j5ZXc1xFl+A5yy0BlZGXfyjLaXW5mw9YPYp6fORQNHN5d54Bhb532CsrIvuc9nDdVCXLyN/DdevjuXJZlnQyhY4CjidexDpSNg0dbWX43s48LDivDlBnDnnHJ0rTE06tLwpDfcLam8NVzr3L05GZCve5s9Y0hoOk2I+E87bv4C+ux1nf00lPm2idun0a0mNRqdse7Hu369eNlzb4UaeiDniz5ncoRvDbANHyQD2rxZ623wOp64f+4jV5sqZni/eWp/sv8+NaxWFg8i62VtkrJdW8lmwQ/7LB+Sj+gFl+c3DHQVoqGXAk0XaXCRlh32a0jqPBadgP3pB+Rj+gF8xvCoquB0Mo1HYRta4bHDpCrOPMsHRodV+HuU306P4HkyVx1lbTtkaQHjmyN8l+/sO0HgpxYnXYXiGEzcowv0RqErASxzeDgbgdTuw71K02dCqA59PC/pBfH5ucqK3G0up2W8JlN8+malF9N0seW5q6hMpsfioYS95BedUbN73eocSqBW5zatwtHDDH063nsuAPMV4cKyar8Tl5Wd0jWnwpZNpHBjdV+wBqO3O0eor4U6/16pqMV57vy/rL8DlkZhkmIV5qJuc1r+WkduLtK7WDtA1cG9S2ZR2C4TDSQiKFtmjWSdbnHe5x3kqRV4Q5Ucmu1f4i3mSxFbJeRnWS0mllHivwY6dvexn2LRVneRDf3dxh3woB3MK0RXOI4ucALnYspy0ykdWyiCC5iDgABtlfewI6LnUO3gpLOFlMSXUkJsBqmdx/kx0cT2cV7sgsl+RAqZ2++OHMafEad5HlHzDtUHHbJ2y9nDp3Z6MByKgZTFlSxr5JAC4+RwawjZbiNp6FUso8l58PeJoXOdGDdsg1PjO7St6dnG2/XFwkYHAggEEWIOsEHcQpwaT08HHC2wVDJDLJtRaGoIbNsa7Y2T7H9G/dwFzWZZXZEuivNSNJZtdELlzN92by3o2jd0WXIGtqZqY+yQ67XaLHOBDnNDW6zfbYki++ygimyal7Oa38fEtCIik6QiIgCIobKXGH0kIkjpZ6glwboRC7gDfnEcNXnQEyiz92Xle4e94DWk/COh9QroGW+N/8uy/9QP/ABoCxYzkVRVJLjFybz40dmk9Y2HtCi6bNnRtN3yVD+gljfotBXnbl9XtHvuA1oPwDyn1Avgzj1B/+jxT5s/qqvJHwOqGt1EI8sZvHxLPhWS9FSu0oYGh/luLnuHU5xJHYptUD2+1x8HAq7tNvqJ7ecR3YDWfLt9RSkkc85ym8yeX5l/VEz2SaOCVPXCP8eNdPt4xXdk/U/Oj/wAaqmcrKfEanDpIqjCJaaIujJmdJpBpbI0gaOgNpAG3epKmv4MzRpoRwijHcwL2rM6bLLGwxoGT0hAaAD7IbrFtvgL0xZc4oPuuT9UPiyaf1EBoRUZPgNI/W+lp3HpY37FVPb/WfxFX/wDv6K++3yu3YFW9/wCwmCYycXlPBbabBaWI3jpoGniI2g99lIqge3yv/iGt+V+wnt6xH+Iav5f7CYwHJt5bL+ioBy8rh4WBV3YdL6i6znIqP4jxT5s/qoQcciX/ALvYw3ppz3sWirDMBynrW4viFRS4VNLJKIQ+Bz+TfCGsABfdp1ute2pW05ZY9/y6/wD6ln6qAtEmStI6p9klhL76Vr8wuGx2jx1DoU8s9iy5xS3vmT9SD8GTS/01z9vWIbsBrPlW+ohCil0Rf0Weuy4xbdk/Udstv9NfW5cYr42T9T2Sg/6aEmgoqD7esQ34DWfK/YT291+/Aq3v/YQF+RVrJjKOese9s2HVNMGtBDpLWcSbaI1DXvVlQBERAEREARR2PYqykgdO8EhthYbSXODQO8heHJrKaGuB0QWSN2xki9vKHEehCvPHm5c7k+iIhYIuLiBrKoGI5wCKgMpo2yR6QaXG+k8k25ltg16tRv1IUnZGCzI0FUHPh+8k54OhP+OxX5UPPgbYHUfGh/z40Llyw114YzxjYe9oXqXjwltqeIcI2D+6F041i8NHCZZnWA1ADwnO3NaN5RvBMYuTSSy2SJKh6nKehjOi+rhB2WDg49wusuxTHa7FJeSia/ROyJl7W4vdqv1mwUvQZr5i0ctURsPktaZbdGldvoWPtG/dR635dTSk9VZyt9lu/wDP2L1S5TUMp0WVUJPAuDT3GymAssxDNfMGnkahj/glpjv23cPMorC8drsLm5KUP0B4UT720eLHbui2pPaNe8h+XVXJvTWczX7Xs/XyNpReDB8TiqoWywuu13eDvaRuIXvWx5LTi8PqZ5kEA7GMYk/lYmfJa4epaGs6zY66/GD/ADwjudL/APi0VCAiIgCIiAIiIAiIgCIiAIiIDz1tJHNG6OVocxwsQd6ybKDAp8NmbLE92he8co2tPkv3X3cCthXRU0zJWOjkaHNcLFp1ghDG2lWLz8SAyTyojrW6L7NmA5zNzvhM4jo3edWVZPlNknNQu5anL3RA3DgTykXxiN3wu/p6sQy1qZqYQOsHHU+Qai9vC3i33kbehMmMdQ4fpsW6/k9+XOVfLE01O73u9nvH8IfJbbxb9/VtmMh8kuQAqKhvvp1sYf4MHefhkd3eujIPJPQtU1DOdtiYfFHluHlcBu69l+UE1VSk/aWdey8As+z5PthDm+VNC3+/pfVWgrOs+n71tP8AOYvQ8etSdZoMLdFoHAAdwWOZW4hLiOIchFra1/IxjdfSs5x7QdfBq12vl0IXvHisc7uaSsnzUU+nWl7tZZE936Ti0aXXYu71jbu1HxPX4ZiuFuoa3gtvizScm8BioYRHGLuOt7/Ge7iejgNymURbJYPKnOU5OUnlsKv5W4AyugLbASNBMTt4dw+KdhH2KwIoaTWGTCyVclOLw0ZJmxxZ0NSaZ9w2S9gfFkYPWA4H4oWtrFsTdyWNnQ3VUWr474y76ZW0rOrOGmenxaKdkLV++Kfz9YM8zT65sVfxxCQd2v6y0NZ3mf24n+cZvQ1aItTyQiIgCIiAIiIAiIgCIiAIiIAiKjZYZZiHSgpSDJsdJtDOhu4u8w8yFJ2RgsyOOXmVXJg01O7nkWkePEB8UfCI7gqacmqkUgqtDmeTr0wzdJbyfVr2KayLyTdUOFRUtPJXu1rtsp4m/i319PVt1HRFrW1cFGDkjVK7Mp7eCKTkNlZywFPUu99Gpjz/AAg4E+WPP1q8LMMs8jzATUUrTye1zBtj+E23i+jq2SORuWenowVbudsZKdjuDXnc7gd/XtF67XB8lnXs/Evyz/PgP3Id0TQ/Tt61oCzzPk/9ytHe6ohaO8n1KTrL2Y9OLRPjMse0WWO5EVfsHERHKbAl0D76gDpANJ/SaPlLZ2iwA6LLOM5OSznONZAwu1e/MAudQ1SAb9QsRwAPFZWp7SXY9ThlsMzoseFNYz4NdDSkWYZJ5wRGxsNbpG1g2UXcbfDG0/GF+nir9S41SyN0o6iFw6Ht9F9SvGakcuo0d2nlicfn2ZIrpqJmsaXvIDWguJOwAC5JUZXZTUUIPKVMNx4ocHO7GtuVnWWOWzqtvIU7XNiJGkT4b9epuiNjdmrafTEpqJbS6G7USSSaXdvoePBb1+MNktqdMZT0Mjddt/ksHWVtSpebvJs0sRmmbaWQDUdrGbQ09JOs9g3K6KKo4W5rxK+FtqjX7sVyr5GeZpPDxT84y+hq0NZ3mm1S4o3eMQlPfq9S0RaHnBERAEREAREQBERAEREARF0z1DIxd72tGy7iGjzoDy45DLJTysgdoyOYQx17WPXu61SslMhXB/KVrBZp5sVw654vtqt0b9/BXxtbC7ZLGepzT6128szym94QynVGclKXY52tsX1dXLs8tveE9kM8tveENTtVDyiyAE0mnSuZGHeGxwOiD5TLbOrZ1K7eyGeWzvC+Oq4xtkYP0ghSyuM1iQpIeTjazSLtFobpHabC1yqLnkF6albxrYR9JXU4pTjbPD8tn2qg52q6J8dC1kkbr18F9FzTYa9ZsdiFzSkXR7Li/CR/KH2p7Kj/AAjPlBAVfHsgqSpJfGORkOslgGgT8JmztFiqpNmvqr82and0kvB7tErVPZMfls+UFyEjfKHeFm6os76eJ6mlcsZbee5mFLmvnv75UxAfBa5x89grfgOR1JR2e1pfIPHfYkfFAFm9gurAZGja4d4XUa6EbZY/lN+1TGuMSt/ENTcsTlt4Lb7HpRdTKhjvBe09RBXZdXOIzzNcP9txj+vO+lItEWc5rHN9k4s8kC9e8azw0j61oIqGeW3vCA7UXHSHEL7dAfUXHSHEJpDiEByRcbjimmOIQHJFxDgdhXJAEREAUNlFkzSYg1jauLTDCXN5zm2JFj4JG5TKICgz5oMFf/wzx1SyD1rgMzmD/g5/nXLQUQGeHM1gx2xTfOvXz3F8F/AzfOvWiIgM79xjBfwM3zr1zjzN4K039jynrlk+1aCiApTc1WDD/hP8SX9ZUnORkNh1I6gFPBoCesjgl57zeN51t1k261tazzPI0CGikP8AB10LvpfYgOXuN4J+LyfOyfavnuNYJ+LyfPS/atCRAZ6czOCfgJfnZPtXJuaHChqaKlo4CU/YpPHMvqOmcWN0pnjUQy2iDwLzq7rqtyZ0pr82kZbpe4n6Ko7Irud1PDdVauaMNvPC+5IyZocKcLOFS4cDK71BcmZn8EA+9nnrlk/WXioM6F3e/wBNZvGM3I/RcBfvVzwbKOlrNUEoLrXLDzXgcdE67dKmM4y6Mzv0V9G9kdvHqvqslX9x/CAdKOOeM8Wyv9d09yii/GsR6uWH6i0BFY5TD83+b+hr/ZoqRM7kaySFlnlt2tA1uttdrOtWwZmsGGsRTA/lXr5mcNxiR/pGf0MWhk2FygKF7k9APAmrmDg2b7Wr4M1FF+NYif7YfqKawXLKmqpjE0PadegX6ID7eTY7d9irMhWM4yWYvJQvcnw/8LW/Pfsr4c1FBumrR/bfsq/IhYoPuUUP4xX/ADw/VX33JsOPhSVjuuY/Yrbi2LQUrQ6eQNBNhtJJ6GjWV6aOqZNG2SNwcxwu0jeEIys47kPktklS4aHim5X3zR0tN5f4N7Wvs2qfREJCIiAIiIAiIgCIiAIiIAs9z2feMP8AW4fQ9aEs8z3/AL3w/wBbh9D0BoazHODlgXOdSUziLapJAdZOu8bSN3E9nFX3HqzkKaaUbWRucOsA289ll+bPCm1FW+SUaYhaHa9d5HOOi48TzXHrssrG9oruerw6quMZ6m1ZUMYXi/8AX+SSySzeh7Gy1ukLi7YhzTbcXna34ot08BdocmKBgs2jpusxtce0kElTKK0YRRy362+6TlKT+C6FbxPIqgnGuBsZ8qICM9oAse0FZxlTkxLhj2Sxve5mlzJBzXteNYDrarkX1i17Ede1rw4rh8dTC+GQXa9pHUdxHAg2KiVaaNdJxG2iS5m3Hunvt8/XiRWRuUDa6n0jYSts2VvTbU4fBP2jcrGsbzfTvpsTELj4XKQvGwFzLkHvYflFbIprlzLcrxHTRovah7r3XwZnGZf7niP5xn9DFo6znMyLMxEf0jP6GLRlc4TK8tcljSu9kU4PJF1yBe8Tr3BFtjb7DuPYrJkRlUKpohmIEzRqOwSAbx8LiO3qtkkYcC1wBBBBB1gg7QQspyvydfQSiaAuERcC1w2xPvcNJ4cD2Hpg45xdMueHTujWVEZR49FRR6T9bj4DBtcfU3iVVGZw/wDZReO9R4NtkZ1fdCeHwePRrUBheFVeKzmR7naN+fKdgF/AYNl9eoDUN/TOS09TnCr3bONNT1eL1RLj8Z2vQiZfwWj0Dadp4rV8JoGU0LIY76LBa52k7ST0kklfMJwyKliEULbNG3i473OO8r3IXpp5N3u33CIiG4REQBERAEREAREQBERAFnmez7whH87h+utDWfZ5/vOnHGsh+sgLRlfEXUFSBt5J57hf1KjZoqhomnjJ1uYxw6Q0kH6be9afI0EEHYdRWK4pSzYRXh0Y5ty6Mm+i9hOtp6gbEdAPBY2bSUj1+HYuot02d3uvkbaigsnMo4K5l43WeBzoyRpt7N46Qp1app9DypwlCTjJYaC+E2X1UDL3K9kcbqencHSuBa9wOqNp1EXB8Mju28ElJRWWaafTzvsVcFu/482VbJg8vjLXt2GaaT9G8jr+cd62hZzmqwMsDqp4tpN0Ix0EgucOgkADqK0ZZ0rETt4tZGV/LHpFKP09YM5zMjm4j+cZ/QxaMs7zP7cT/OM3oatEWp5h8VOy9yijhjdTtDXyPbZwIDmsad7h5XAdvWyxywbTAxU5DpthdtbH18X9G7fwNYyTyXkrn8vUF3JXuSb6Up6CfF4u7B0Dlttbfs6+v2K26jlbG2V0buTcS1ryDouI3X3+ux4Fa3kdjENTTtEbWxujAa+Iag3paPJO4+tSdbhcM0BgewcmW6IaABo22FvAjcsqrKWpwirDmn4j9ehIy+trunZcbtRG5R0MuV6d56p9TZEUNk5j8NbHpMNnjw4z4TT628CplSdyaksoIiISEREAREQBERAEREAREQBZ9nk109IONbCPpLQVQ86dDNM2hEMUklq6Fz9BrnaLRe7nWHNaOJ1IC+KPxjCYauIxTsDmnYfGafKadxUgiEpuLTXUx7F8ha2kfylKXyNHgujJbK3ra23e3bwC6YsssVhGi9zrj8LHZ3bcArZ18ssvZY914PVXFXNJXwjPHd7P7GKzYvi9dzG+yHA7RGwsYet7ABbrKn8mM3RuJK4tsNYiab3/ACjtlugd+5aWF9RVLrLcrZxSbhyUxUF5dfrt9jrjjDQA0AACwA1AAbgF2Ii1PLM6zPG//wAkf6Rm9DVc8eZOaaUUxtKW83cb77HcbXt0qpZp8PmgZX8tFJGX1872h7S3SYQyzm32tOvXsV/QhrKwZlktkRJI/lK1pa0G4jJ5zzxcfJ859OkxsDQA0AACwA1AAbgF2IhSuqNawgvDi2GRVMRimaC097Tuc07iOK9yIXazszH8Qwesw2qa6ASO1+9vY1ztIX+5vAG3iNh2jo1unLixpcLOIBI4EjWO9dqIZ11KtvD2YREQ1CIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//9k=',
        title:'Tic Tac Toa game',
        category:'React',
        link:'https://tic-tac-toa-game-beta.vercel.app/'
        
    },
    {
        id:11,
        img:recipe,
        title:'Recipe app',
        category:'React',
        link:'https://ali-haidar-recipe-app-4mck.vercel.app/'
        
    },
    {
        id:12,
        img:movie,
        title:'Movie Web',
        category:'Firebase',
        link:'https://filmidunia-6d549.web.app'
        
    },
    {
        id:13,
        img:ecom,
        title:'E-comerece',
        category:'Firebase',
        link:'https://final-ecomerce.web.app'
        
    },
     
    {
        id:15,
        img:medicare,
        title:'Medicare Dashboard',
        category:'MongoDb',
        link:'https://medicare-nextjs-dashboard-zyx.vercel.app/'
        
    },
    {
        id:16,
        img:book,
        title:'Book Store',
        category:'MongoDb',
        link:'https://book-store-frontend-git-master-alis-projects-42054f63.vercel.app/'
        
    },
] 


export const projectNavs=[
    {
        name:'Javascirpt'
    },
    {
        name:'React'
    },
    {
        name:'Firebase'
    },
    {
        name:'MongoDb'
    },
]