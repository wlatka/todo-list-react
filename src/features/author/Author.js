import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function Author() {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Wojtek Łatka"
                body={
                    <>
                        <p>Urodziłem się w małej wsi Łącko w 1982r. Obecnie mieszkam w małej wsi
                            <strong>Jawornik</strong> pod Krakowem. Moją pasją jest karawaning. Całe wakacje spędzam na polu kempingowym. Niestety wakacje są krótkie z braku urlopu, dla tego postanowiłem nauczyć sie programowania, aby móc pracować zdalnie w naszej przyczepie :-)
                        </p>
                        <p>
                            W przysłości chciał bym zmienić przyczepę na kampera i zwiedzić fajne miejsca w polsce i za granicą.
                        </p>
                    </>
                } />
        </Container>
    );
};

export default Author;