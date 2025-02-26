import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const VehicleCard = (props) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(actions.checkFavorites(props.id, "Vehicles"));
  }, [store.favoriteVehicles]);

  return (
    <div
      className="card m-3 mb-5 starwars-bg starwars-border-light"
      style={{ width: "20rem", height: "462px" }}
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`}
        className="card-img-top"
        alt="..."
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title starwars-text-active mb-3">{props.name}</h5>
        <div className="card-text red-text-active">
          <p>
            Model: <span className="starwars-text-active">{props.model}</span>
          </p>
          <p className="text-wrap">
            Vehicle class:{" "}
            <span className="starwars-text-active">{props.vehicle_class}</span>
          </p>
        </div>
        <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x w-100">
          <Link to={`/vehicle/${props.id}`}>
            <button
              type="button"
              href="#"
              className="starwars-btn p-2 rounded mx-3"
              onClick={() => {
                actions.openItem(props.id, setVehicleDetails, "vehicle", {
                  name: "name",
                  description: "description",
                  model: "model",
                  vehicleClass: "vehicle_class",
                  manufacturer: "manufacturer",
                  length: "length",
                  passengers: "passengers",
                  uid: "uid",
                });
              }}
            >
              Learn more
            </button>
          </Link>
          <button
            type="button"
            href="#"
            className="favorite-btn p-2 rounded mx-3"
            style={{ width: "40px" }}
            onClick={() => {
              if (isFavorite) {
                actions.removeFromFavorites(props.id, "Vehicles");
              } else {
                actions.addToFavorites(props.id, "Vehicles");
              }
            }}
          >
            <i
              className={(isFavorite ? "fas" : "far") + " fa-heart text-danger"}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};