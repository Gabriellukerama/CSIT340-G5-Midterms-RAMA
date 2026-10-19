function FeaturesCard(props){
    return (
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Free
          </span>
          <h3 className="mt-8 text-3xl font-bold">{props.stars}</h3>
          <p className="mt-3 text-xl text-[#000000]">{props.des}</p>
        </div>
    );
}
export default FeaturesCard;