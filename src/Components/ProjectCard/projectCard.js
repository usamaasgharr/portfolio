import React, { useState, useMemo } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const hasDetailModal =
    Array.isArray(props.detailBullets) && props.detailBullets.length > 0;

  const techItems = useMemo(() => {
    if (!props.technologies) return [];
    return props.technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }, [props.technologies]);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          <div className="project-card-actions d-flex flex-wrap gap-2 align-items-center">
            {props.ghLink ? (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <BsGithub /> GitHub
              </Button>
            ) : null}
            {props.demoLink ? (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            ) : null}
            {hasDetailModal ? (
              <Button
                variant="outline-light"
                className="button project-read-more-btn"
                onClick={() => setShowModal(true)}
              >
                <MdReadMore /> Read more
              </Button>
            ) : null}
          </div>
        </Card.Body>
      </Card>

      {hasDetailModal ? (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          scrollable
          className="project-detail-modal-root"
          dialogClassName="project-detail-modal-dialog"
          contentClassName="project-detail-modal-content"
          backdropClassName="project-modal-backdrop"
        >
          <Modal.Header closeButton closeVariant="white" className="project-modal-header">
            <div className="project-modal-title-block">
              <span className="project-modal-eyebrow overflow-hidden">
                <HiSparkles className="project-modal-eyebrow-icon" aria-hidden />
                Project breakdown
              </span>
              <Modal.Title as="h4" className="project-modal-title">
                {props.title}
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body className="project-modal-body">
            {props.modalRole ? (
              <div className="project-modal-role-card">
                <span className="project-modal-role-label">Role</span>
                <p className="project-modal-role mb-0">{props.modalRole}</p>
              </div>
            ) : null}

            {techItems.length > 0 ? (
              <div className="project-modal-tech-section">
                <span className="project-modal-tech-heading">Stack & integrations</span>
                <div className="project-modal-chip-row">
                  {techItems.map((tag) => (
                    <span key={tag} className="project-modal-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <span className="project-modal-highlights-label">Highlights</span>
            <ul className="project-modal-bullets mb-0">
              {props.detailBullets.map((line, i) => (
                <li key={i} style={{ "--i": i }}>
                  <span className="project-modal-bullet-mark" aria-hidden />
                  <span className="project-modal-bullet-text">{line}</span>
                </li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
}
export default ProjectCards;
