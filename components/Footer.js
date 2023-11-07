import html from "html-literal";

export default () => html`
  <footer>

    <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-contact">
                            <h2>Our contact info</h2>
                            <p><i class="fa fa-map-marker-alt"></i>Location, City, Country</p>
                            <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope"></i>info@example.com</p>
                            <div class="footer-social">
                                <a class="btn btn-custom" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-custom" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-custom" href="#"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-custom" href="#"><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-custom" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; My Journey With CP</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="https://linkedin.com/in/zaid-alhakeem-b0496b287">ZAID AL-HAKEEM</a></p>
                    </div>
                </div>
            </div>
        </div>
  </footer>
`;
