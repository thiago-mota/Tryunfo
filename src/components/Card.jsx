import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <div data-testid="name-card">
          { cardName }
        </div>

        <img
          className="image"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />

        <div
          data-testid="description-card"
          className="description"
        >
          { cardDescription }
        </div>

        <div data-testid="attr1-card">
          { cardAttr1 }
        </div>

        <div data-testid="attr2-card">
          { cardAttr2 }
        </div>

        <div data-testid="attr3-card">
          { cardAttr3 }
        </div>

        <div data-testid="rare-card">
          { cardRare }
        </div>

        <div>
          {
            cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div>
              : ''
          }
        </div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
