import useSWR from "swr";
import { Card } from "react-bootstrap";

const ArtworkCardDetail = ({ objectID }) => {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  const {
    primaryImage,
    title,
    objectDate,
    classification,
    medium,
    artistDisplayName,
    artistWikidata_URL,
    creditLine,
    dimensions,
  } = data;

  return (
    <Card>
      {primaryImage && (
        <Card.Img variant="top" src={primaryImage} alt={title} />
      )}
      <Card.Body>
        <Card.Title>{title || "N/A"}</Card.Title>
        <Card.Text>
          <h6>
            <b>Date:</b> {objectDate || "N/A"}{" "}
          </h6>
          <h6>
            <b>Classification:</b> {classification || "N/A"}{" "}
          </h6>
          <h6>
            <b>Medium:</b> {medium || "N/A"}{" "}
          </h6>
          <br />
          {artistDisplayName && artistWikidata_URL ? (
            <>
              <b>Artist:</b> {artistDisplayName}
              <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
                (wiki)
              </a>
              <br />
            </>
          ) : (
            <>
              <b>Artist:</b> N/A
              <br />
            </>
          )}
          <b>Credit Line:</b> {creditLine || "N/A"}
          <br />
          <b>Dimensions:</b> {dimensions || "N/A"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCardDetail;
