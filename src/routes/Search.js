import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Search(props) {
    const [openskyData, setOpenskyData] = useState('')
    const [dakakoData, setDatakoData] = useState('')
    // const [rapidapiData, setRapidApiData] = useState('')

    // let options = {
    //     params: {
    //         version: 'v2',
    //         DepartureDateTime: '2023-08-18 16:00',
    //         DepartureAirport: 'ICN',
    //         CodeType: 'iata',
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '7b81e2ee86mshbeac412d969d2c3p1ffc37jsnbd80e0cf0177',
    //       'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
    //     }
    // }

    // useEffect(() => {
    //     axios.get('https://flight-info-api.p.rapidapi.com/schedules', options)
    //     .then(res => {
    //         setRapidApiData(res.data)
    //     })
    //     .catch(error => console.log(error))
    // })
    function getOpenskyStates() {
        axios.get('https://opensky-network.org/api/states/all')
        .then(res => {
            setOpenskyData(res.data)
        })
        .catch(error => console.log(error))
    
        console.log(openskyData)
    }

    function getOpenskyFlightsDep() {
        axios.get('https://opensky-network.org/api/flights/departure', {
            params: {
                airport: "ICN"
            }
        })
        .then(res => {
            setOpenskyData(res.data)
        })
        .catch(error => console.log(error))
    
        console.log(openskyData)
    }

    function getAirportOrKr() {
        axios.get('http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp/getPassengerArrivalsOdp', {
            params: {
                serviceKey: 'iO4JultO7mpuiAi72XfL2z1yy960VJtnE77kBRzMcX6/FCzK0e21bOYmUq8uwr84VQl3cRnyXFPqmiD+WRlG8A==',
                from_time: 0,
                to_time: 2400,
                airport: 'ICN',
                lang: 'E',
                type: 'json'
            }
        })
        .then(res => {
            setDatakoData(res.data)
        })
        .catch(error => console.log(error))

        console.log(dakakoData)
    }

    /*
        ICN 인천국제공항
        GMP 김포국제공항
        PUS 김해공항
        CJU 제주공항
        KWJ 광주공항
        TAE 대구공항
        RSU 여수/순천공항
        USN 울산공항
        HIN 진주/사천공항
        CJJ 청주공항
        KPO 포항/경주공항
    */

    return (
        <>
            <h1>Search</h1><form>
                <label htmlFor='depDate'>Departure date</label>
                <input type='date' id='depDate'></input> <br/>
                <label htmlFor='arrAirport'></label>
                <select id='arrAirport' /* onChange={handleChangeSelect} */ defaultValue={'ICN'}>
                    /* 나중에 백엔드에서 / API로 airport 목록으로 받아서 사용해야 함 */
                    <option value='SIN'>창이 국제공항(싱가포르, SIN)</option>
                    <option value='DOH'>도하 하마드 국제공항(카타르, DOH)</option>
                    <option value='HND'>토쿄 하네다 국제공항(일본, HND)</option>
                    <option value='ICN'>인천국제공항(대한민국, ICN)</option>
                    <option value='CDG'>파히 샤를 드골 국제공항(프랑스, CDG)</option>
                    <option value='IST'>이스탄불 국제공항(튀르키예, IST)</option>
                    <option value='MUC'>뮌헨 국제공항(독일, MUC)</option>
                    <option value='ZRH'>취리히 국제공항(스위스, ZRH)</option>
                    <option value='NRT'>나리타 국제공항(일본, NRT)</option>
                    <option value='MAD'>마드리드 바라하스 공항(에스파냐, MAD)</option>
                </select>
            </form>
            <button onClick={getOpenskyStates}>getOpenskyStates</button>
            <button onClick={getOpenskyFlightsDep}>getOpenskyFlightsDep</button>
            <button onClick={getAirportOrKr}>getAirportOrKr</button>
        </>
    )
}

export default Search;